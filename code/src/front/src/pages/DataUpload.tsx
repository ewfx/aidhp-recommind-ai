import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CSVUploader from '@/components/data-upload/CSVUploader';

const DataUploadPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Data Upload</h1>
      <CSVUploader />
    </div>
  );
};

export default DataUploadPage;