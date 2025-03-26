from fastapi import FastAPI, File, UploadFile, HTTPException, Depends, Form
from fastapi.middleware.cors import CORSMiddleware
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
    allow_origins=["http://localhost:3000"],  # React app URL
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

@app.post("/upload-csv")
async def upload_csv(
    file: UploadFile = File(...), 
    file_type: str = Form(...),
    db: Session = Depends(get_db)
):
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
        raise HTTPException(status_code=400, detail="Invalid file type")
    
    # Check file extension
    if not file.filename.endswith('.csv'):
        raise HTTPException(status_code=400, detail="Only CSV files are allowed")
    
    try:
        # Read CSV file
        df = pd.read_csv(file.file)
        
        # Basic validation
        if df.empty:
            raise HTTPException(status_code=400, detail="CSV file is empty")
        
        # Convert DataFrame to SQL
        table_name = file_type.replace(' ', '_')
        df.to_sql(
            name=table_name, 
            con=engine, 
            if_exists='replace',  # Replace existing table
            index=False
        )
        
        return {
            "message": f"{file_type} CSV uploaded successfully", 
            "rows_imported": len(df)
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)