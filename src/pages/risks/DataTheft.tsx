
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DataTheftRisks = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-4">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)} 
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Results
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Data Theft</CardTitle>
          <CardDescription>
            Personal information collected from social media can be used without consent.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Risks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Unauthorized collection of personal information</li>
              <li>Metadata extraction from photos and posts</li>
              <li>Cross-platform data aggregation</li>
              <li>AI-powered profiling and prediction</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Prevention Measures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Regularly audit privacy settings across platforms</li>
              <li>Use metadata removal tools before sharing photos</li>
              <li>Limit personal information shared in profiles</li>
              <li>Be cautious with third-party applications connected to social accounts</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataTheftRisks;
