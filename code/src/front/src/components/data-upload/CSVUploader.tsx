import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner"


import axios from 'axios';

const CSVUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState('');

  const csvFileTypes = [
    'customer_demographics',
    'financial_profiles', 
    'life_events',
    'digital_engagement',
    'offers_history',
    'transactions',
    'recommendations'
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please select a file to upload",
        variant: "destructive"
      });
      return;
    }

    if (!fileType) {
      toast({
        title: "Error",
        description: "Please select a file type",
        variant: "destructive"
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('file_type', fileType);

    try {
      const response = await axios.post('http://localhost:8000/upload-csv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast({
        title: "Success",
        description: `${fileType} CSV uploaded successfully`,
        variant: "default"
      });
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: error.response?.data?.detail || "An error occurred during upload",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>CSV File Uploader</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select onValueChange={setFileType}>
            <SelectTrigger>
              <SelectValue placeholder="Select CSV Type" />
            </SelectTrigger>
            <SelectContent>
              {csvFileTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input 
            type="file" 
            accept=".csv"
            onChange={handleFileChange}
            className="file:mr-4 file:rounded-md file:border file:border-gray-300 file:bg-gray-50 file:px-4 file:py-2"
          />

          <Button 
            onClick={handleUpload} 
            disabled={!selectedFile || !fileType}
            className="w-full"
          >
            Upload CSV
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CSVUploader;
