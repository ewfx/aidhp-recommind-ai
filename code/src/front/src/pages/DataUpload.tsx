import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Upload, FileText, CheckCircle2, AlertCircle, ArrowRight, Users, TrendingUp, Info, BarChart3, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface FileUploadState {
  name: string;
  description: string;
  uploaded: boolean;
  progress: number;
  status: "pending" | "uploading" | "completed" | "error";
}

// Add this interface for the enhanced API response
interface UploadResponse {
  success: boolean;
  message: string;
  rows_imported?: number;
  file_type?: string;
  error?: string;
}

const DataUploadPage: React.FC = () => {
  const navigate = useNavigate();
  const [fileStates, setFileStates] = useState<FileUploadState[]>([
    {
      name: "customer_demographics.csv",
      description: "Basic customer information including age, location, occupation, and marital status",
      uploaded: false,
      progress: 0,
      status: "pending",
    },
    {
      name: "financial_profiles.csv",
      description: "Customer financial details including income, credit score, and account balances",
      uploaded: false,
      progress: 0,
      status: "pending",
    },
    {
      name: "life_events.csv",
      description: "Significant life events like marriage, job changes, or home purchases",
      uploaded: false,
      progress: 0,
      status: "pending",
    },
    {
      name: "digital_engagement.csv",
      description: "Customer interaction data from digital channels and app usage",
      uploaded: false,
      progress: 0,
      status: "pending",
    },
    {
      name: "offers_history.csv",
      description: "Historical data of offers made to customers and their responses",
      uploaded: false,
      progress: 0,
      status: "pending",
    },
    {
      name: "transactions.csv",
      description: "Detailed transaction records including amounts, categories, and timestamps",
      uploaded: false,
      progress: 0,
      status: "pending",
    },
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [totalFilesUploaded, setTotalFilesUploaded] = useState(0);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>, fileIndex: number) => {
    const files = event.target.files;
    if (files && files[0]) {
      setIsUploading(true);

      try {
        const formData = new FormData();
        formData.append("file", files[0]);
        const fileType = fileStates[fileIndex].name.replace(".csv", "");
        formData.append("file_type", fileType);

        // Update status to uploading
        setFileStates((prevStates) => {
          const newStates = [...prevStates];
          newStates[fileIndex] = {
            ...newStates[fileIndex],
            status: "uploading",
            progress: 50, // Show 50% while uploading
          };
          return newStates;
        });

        const response = await fetch("/api/upload-csv", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
          credentials: "include",
        });

        const result: UploadResponse = await response.json();

        // Check if the response indicates success
        if (response.status === 200) {
          console.log(`Upload successful for ${fileType}:`, result);

          // Update state to show completion
          setFileStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[fileIndex] = {
              ...newStates[fileIndex],
              uploaded: true,
              progress: 100,
              status: "completed",
            };
            return newStates;
          });

          // Update total files uploaded
          setTotalFilesUploaded((prev) => prev + 1);

          // Check if all files are uploaded
          if (totalFilesUploaded + 1 === fileStates.length) {
            setIsUploading(false);
            setIsProcessing(true);
            setTimeout(() => {
              navigate("/rm-dashboard");
            }, 1500);
          }
        } else {
          // Handle unsuccessful response
          throw new Error(result.message || `Upload failed: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Upload error:", error);
        setFileStates((prevStates) => {
          const newStates = [...prevStates];
          newStates[fileIndex] = {
            ...newStates[fileIndex],
            uploaded: false,
            progress: 0,
            status: "error",
          };
          return newStates;
        });

        alert(error instanceof Error ? error.message : "Failed to upload file. Please try again.");
        setIsUploading(false);
      }
    }
  };

  const getOverallProgress = () => {
    // Calculate progress based on total files uploaded
    return Math.round((totalFilesUploaded / fileStates.length) * 100);
  };

  const getFileCardStyle = (status: FileUploadState["status"]) => {
    switch (status) {
      case "completed":
        return "border-green-200 bg-green-50";
      case "uploading":
        return "border-blue-200 bg-blue-50";
      case "error":
        return "border-red-200 bg-red-50";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Data Upload</h1>
            <p className="text-gray-600">Upload your customer data to get started with RecomMind AI</p>
          </div>

          {/* Overall Progress Card - Always visible */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Upload Progress</span>
                  <span className="text-sm text-gray-500">{getOverallProgress()}%</span>
                </div>
                <Progress value={getOverallProgress()} className="h-2" />
                <p className="text-sm text-gray-500 text-center">
                  {totalFilesUploaded} of {fileStates.length} files uploaded
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Required Files</CardTitle>
              <CardDescription>Please upload the following CSV files to proceed. Example files are available in the data_generator folder.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fileStates.map((fileState, index) => (
                  <Card key={fileState.name} className={`relative transition-all duration-300 ${getFileCardStyle(fileState.status)}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <FileText className={`h-5 w-5 ${fileState.status === "completed" ? "text-green-600" : fileState.status === "error" ? "text-red-600" : "text-blue-600"}`} />
                          <h3 className="font-medium">{fileState.name}</h3>
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{fileState.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">CSV format, max 20MB</p>
                      <div className="space-y-3">
                        {fileState.status === "completed" ? (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle2 className="h-5 w-5" />
                            <span className="text-sm font-medium">Upload Complete</span>
                          </div>
                        ) : fileState.status === "error" ? (
                          <div className="flex items-center gap-2 text-red-600">
                            <AlertCircle className="h-5 w-5" />
                            <span className="text-sm font-medium">Upload Failed</span>
                          </div>
                        ) : (
                          <Button variant="outline" size="sm" className="relative w-full">
                            <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".csv" onChange={(e) => handleFileUpload(e, index)} disabled={fileState.status === "uploading"} />
                            <Upload className="h-4 w-4 mr-2" />
                            {fileState.status === "uploading" ? "Uploading..." : "Upload"}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {isProcessing && (
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Processing Complete!</CardTitle>
                <CardDescription className="text-blue-700">All files have been successfully processed. Preparing your dashboards...</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="flex items-center gap-3 text-blue-600">
                    <Loader2 className="h-6 w-6 animate-spin" />
                    <span className="font-medium">Redirecting to RM Dashboard</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataUploadPage;
