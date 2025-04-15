
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
          <CardTitle>Data Theft and Privacy Breaches</CardTitle>
          <CardDescription>
            Your personal information can be compromised through various digital channels.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Risks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Platform data breaches exposing personal information</li>
              <li>Third-party app unauthorized data access</li>
              <li>Tracking cookies collecting behavioral data</li>
              <li>Location data harvesting</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Prevention Measures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Review app permissions regularly</li>
              <li>Use privacy-focused browser settings</li>
              <li>Disable location tracking when not needed</li>
              <li>Regularly delete unused accounts and data</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataTheftRisks;
