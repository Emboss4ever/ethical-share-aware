import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Home } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const IdentityTheftRisks = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/risks");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <Button 
          variant="ghost" 
          onClick={handleGoBack} 
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Risks
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="flex items-center"
        >
          <Home className="mr-2 h-4 w-4" />
          Back to Homepage
        </Button>
      </div>

      <Card className="mb-8">
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

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Learn More About This Technology</CardTitle>
          <CardDescription>
            Academic research on identity theft and digital impersonation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">The Identity Theft Threat of Social Media Information Disclosure</h4>
              <p className="text-sm text-gray-500 mt-1">Computers & Security (2016)</p>
              <p className="mt-2 text-sm">An examination of how personal information shared on social media platforms increases vulnerability to identity theft and provides risk mitigation recommendations.</p>
              <a href="https://www.sciencedirect.com/science/article/pii/S0167404816301559" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
                Read Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">Social Engineering and Identity Theft Through Social Media</h4>
              <p className="text-sm text-gray-500 mt-1">Advanced Sciences and Technologies for Security Applications (2019)</p>
              <p className="mt-2 text-sm">This chapter explores how social media facilitates social engineering attacks leading to identity theft and offers countermeasures against such threats.</p>
              <a href="https://link.springer.com/chapter/10.1007/978-3-030-13283-5_6" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
                Read Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>In Real Life</CardTitle>
          <CardDescription>
            Real-world examples and journalistic coverage of identity theft
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900">The 2017-2018 Equifax Data Breach</h4>
            <p className="mt-2">One of the largest identity theft cases in history occurred when hackers breached Equifax, one of the three major consumer credit reporting agencies, exposing personal information of approximately 147 million people. This data included names, birth dates, addresses, Social Security numbers, and in some cases driver's license numbers, creating unprecedented risk for identity theft.</p>
            <a href="https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
              FTC Settlement Information <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-gray-900">Journalistic Investigation: The Secret Life of Identity Thieves</h4>
            <p className="mt-2">WIRED magazine's investigation into the underground economy of identity theft, following both perpetrators and victims to understand the mechanics and impacts of digital identity crimes.</p>
            <a href="https://www.wired.com/story/how-to-protect-yourself-from-identity-theft/" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
              Read Article <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdentityTheftRisks;
