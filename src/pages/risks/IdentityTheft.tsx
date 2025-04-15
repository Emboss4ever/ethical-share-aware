
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const IdentityTheftRisks = () => {
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
          <CardTitle>Identity Theft</CardTitle>
          <CardDescription>
            Cybercriminals can piece together personal information for fraudulent activities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Risks</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fraudulent account creation</li>
              <li>Unauthorized credit card applications</li>
              <li>Tax return fraud</li>
              <li>Bank account takeover</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Prevention Measures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Never share sensitive personal information</li>
              <li>Use strong, unique passwords</li>
              <li>Enable two-factor authentication</li>
              <li>Monitor credit reports regularly</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdentityTheftRisks;
