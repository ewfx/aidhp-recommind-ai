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
}

const DataUploadPage: React.FC = () => {
  const navigate = useNavigate();
  const [fileStates, setFileStates] = useState<FileUploadState[]>([
    {
      name: "customer_demographics.csv",
      description: "Basic customer information including age, location, occupation, and marital status",
      uploaded: false,
      progress: 0,
    },
    {
      name: "financial_profiles.csv",
      description: "Customer financial details including income, credit score, and account balances",
      uploaded: false,
      progress: 0,
    },
    {
      name: "life_events.csv",
      description: "Significant life events like marriage, job changes, or home purchases",
      uploaded: false,
      progress: 0,
    },
    {
      name: "digital_engagement.csv",
      description: "Customer interaction data from digital channels and app usage",
      uploaded: false,
      progress: 0,
    },
    {
      name: "offers_history.csv",
      description: "Historical data of offers made to customers and their responses",
      uploaded: false,
      progress: 0,
    },
    {
      name: "transactions.csv",
      description: "Detailed transaction records including amounts, categories, and timestamps",
      uploaded: false,
      progress: 0,
    },
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, fileIndex: number) => {
    const files = event.target.files;
    if (files && files[0]) {
      setIsUploading(true);
      // Simulate file upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFileStates((prevStates) => {
          const newStates = [...prevStates];
          newStates[fileIndex] = {
            ...newStates[fileIndex],
            progress: Math.min(progress, 100),
          };
          return newStates;
        });

        if (progress >= 100) {
          clearInterval(interval);
          setFileStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[fileIndex] = {
              ...newStates[fileIndex],
              uploaded: true,
              progress: 100,
            };
            return newStates;
          });

          // Check if all files are uploaded
          setFileStates((prevStates) => {
            const allUploaded = prevStates.every((state) => state.uploaded);
            if (allUploaded) {
              setIsUploading(false);
              setIsProcessing(true);
              // Add a small delay before navigation to show completion
              setTimeout(() => {
                navigate("/rm-dashboard");
              }, 1000);
            }
            return prevStates;
          });
        }
      }, 500);
    }
  };

  const getOverallProgress = () => {
    const totalProgress = fileStates.reduce((acc, state) => acc + state.progress, 0);
    return Math.round(totalProgress / fileStates.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Data Upload</h1>
            <p className="text-gray-600">Upload your customer data to get started with RecomMind AI</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Required Files</CardTitle>
              <CardDescription>Please upload the following CSV files to proceed. Example files are available in the data_generator folder.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fileStates.map((fileState, index) => (
                  <Card key={fileState.name} className="relative">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-blue-600" />
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
                      <div className="flex items-center gap-4">
                        {fileState.uploaded ? (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle2 className="h-5 w-5" />
                            <span className="text-sm">Uploaded</span>
                          </div>
                        ) : (
                          <Button variant="outline" size="sm" className="relative w-full">
                            <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".csv" onChange={(e) => handleFileUpload(e, index)} />
                            <Upload className="h-4 w-4 mr-2" />
                            Upload
                          </Button>
                        )}
                        {fileState.progress > 0 && fileState.progress < 100 && <Progress value={fileState.progress} className="w-full h-2" />}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {isUploading && (
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Upload Progress</span>
                    <span className="text-sm text-gray-500">{getOverallProgress()}%</span>
                  </div>
                  <Progress value={getOverallProgress()} className="h-2" />
                </div>
              </CardContent>
            </Card>
          )}

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
