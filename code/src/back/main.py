from fastapi import FastAPI, File, UploadFile, HTTPException, Depends, Form, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd
import sqlalchemy
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
import os

# Database Configuration
DATABASE_URL = "postgresql://postgres:user_pwd@localhost/postgres"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/upload-csv", status_code=status.HTTP_200_OK)
async def upload_csv(
    file: UploadFile = File(...), 
    file_type: str = Form(...),
    db: Session = Depends(get_db)
):
    try:
        # Validate file type
        allowed_types = [
            'customer_demographics',
            'financial_profiles', 
            'life_events',
            'digital_engagement',
            'offers_history',
            'transactions',
            'recommendations'
        ]
        
        if file_type not in allowed_types:
            return JSONResponse(
                status_code=status.HTTP_400_BAD_REQUEST,
                content={
                    "success": False,
                    "message": f"Invalid file type. Allowed types are: {', '.join(allowed_types)}",
                    "error": "INVALID_FILE_TYPE"
                }
            )
        
        # Check file extension
        if not file.filename.endswith('.csv'):
            return JSONResponse(
                status_code=status.HTTP_400_BAD_REQUEST,
                content={
                    "success": False,
                    "message": "Only CSV files are allowed",
                    "error": "INVALID_FILE_EXTENSION"
                }
            )
        
        # Read CSV file content
        contents = await file.read()
        
        try:
            # Try to read CSV data
            df = pd.read_csv(pd.io.common.BytesIO(contents))
            
            # Basic validation
            if df.empty:
                return JSONResponse(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    content={
                        "success": False,
                        "message": "CSV file is empty",
                        "error": "EMPTY_FILE"
                    }
                )
            
            # Convert DataFrame to SQL
            table_name = file_type.replace(' ', '_')
            df.to_sql(
                name=table_name, 
                con=engine, 
                if_exists='replace',
                index=False
            )
            
            return JSONResponse(
                status_code=status.HTTP_200_OK,
                content={
                    "success": True,
                    "message": f"{file_type} CSV uploaded successfully",
                    "rows_imported": len(df),
                    "file_type": file_type
                }
            )
            
        except pd.errors.EmptyDataError:
            return JSONResponse(
                status_code=status.HTTP_400_BAD_REQUEST,
                content={
                    "success": False,
                    "message": "The CSV file is empty or invalid",
                    "error": "INVALID_CSV"
                }
            )
        except Exception as e:
            return JSONResponse(
                status_code=status.HTTP_400_BAD_REQUEST,
                content={
                    "success": False,
                    "message": f"Error processing CSV: {str(e)}",
                    "error": "CSV_PROCESSING_ERROR"
                }
            )
            
    except Exception as e:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={
                "success": False,
                "message": f"Server error: {str(e)}",
                "error": "SERVER_ERROR"
            }
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)