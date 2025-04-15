
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DeepfakeRisks = () => {
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
          <CardTitle>Deepfake Exploitation</CardTitle>
          <CardDescription>
            AI-generated synthetic media can be created using your photos and videos.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Risks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Creation of fake compromising content</li>
              <li>Impersonation for scams and fraud</li>
              <li>Reputation damage through synthetic media</li>
              <li>Voice cloning for social engineering</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Prevention Measures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Limit public photos and videos</li>
              <li>Use watermarks on professional content</li>
              <li>Enable face recognition alerts where available</li>
              <li>Monitor your digital presence regularly</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeepfakeRisks;
