import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const DataTheftRisks = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-4">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/risks")} 
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Results
      </Button>

      <Card className="mb-8">
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

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Learn More About This Technology</CardTitle>
          <CardDescription>
            Academic research on data theft and unauthorized data collection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">Data Breaches and Privacy Protection: Consumer Risk Perceptions and Behaviors</h4>
              <p className="text-sm text-gray-500 mt-1">Journal of Consumer Affairs (2021)</p>
              <p className="mt-2 text-sm">This research examines how data breaches affect consumer perceptions and behaviors related to personal information sharing and privacy.</p>
              <a href="https://doi.org/10.1111/joca.12340" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
                Read Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">Dark Patterns and Data Extraction: Ethical Considerations in Web Design</h4>
              <p className="text-sm text-gray-500 mt-1">Ethics and Information Technology (2022)</p>
              <p className="mt-2 text-sm">Explores how user interface design can be weaponized to extract excessive personal data from users without meaningful consent.</p>
              <a href="https://doi.org/10.1007/s10676-022-09623-4" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
                Read Publication <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-purple-700">The Economics of Data Theft: Understanding Markets for Stolen Information</h4>
              <p className="text-sm text-gray-500 mt-1">Journal of Cybersecurity (2020)</p>
              <p className="mt-2 text-sm">Analysis of darkweb marketplaces where stolen personal data is bought and sold, examining pricing models and valuation of different types of personal information.</p>
              <a href="https://doi.org/10.1093/cybsec/tyaa001" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
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
            Real-world examples and journalistic coverage of data theft
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900">The Cambridge Analytica Scandal</h4>
            <p className="mt-2">In 2018, it was revealed that Cambridge Analytica had harvested the personal data of millions of Facebook users without their consent. The company used this data to build psychological profiles aimed at influencing voter behavior in political campaigns, including the 2016 U.S. presidential election and the UK Brexit referendum.</p>
            <a href="https://www.theguardian.com/technology/2019/mar/17/the-cambridge-analytica-scandal-changed-the-world-but-it-didnt-change-facebook" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
              Read Article <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-gray-900">Journalistic Investigation: The Data Brokers Mining Your Information</h4>
            <p className="mt-2">Reuters investigation into how data brokers collect and sell personal information, often without users' knowledge or meaningful consent.</p>
            <a href="https://www.reuters.com/investigates/special-report/usa-data-brokers/" className="text-sm text-purple-600 inline-flex items-center mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
              Read Article <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataTheftRisks;
