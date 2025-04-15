
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const OSINTRisks = () => {
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
          <CardTitle>OSINT Vulnerabilities</CardTitle>
          <CardDescription>
            Open Source Intelligence (OSINT) involves collecting and analyzing publicly available data.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Risks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Location tracking through photo metadata and check-ins</li>
              <li>Pattern-of-life analysis revealing daily routines and habits</li>
              <li>Social engineering attacks based on personal information</li>
              <li>Family and friend network mapping for targeted attacks</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Prevention Measures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Strip metadata from photos before posting</li>
              <li>Avoid sharing location data in real-time</li>
              <li>Limit personal information in public posts</li>
              <li>Regularly review and update privacy settings</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OSINTRisks;
