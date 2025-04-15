
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Risks = () => {
  const digitalRisks = [
    {
      id: "osint",
      title: "OSINT Vulnerabilities",
      description: "Open Source Intelligence (OSINT) involves collecting and analyzing publicly available data. Frequent posting and oversharing can make you vulnerable to:",
      risks: [
        "Location tracking through photo metadata",
        "Pattern-of-life analysis",
        "Social engineering attacks",
        "Family and friend network mapping"
      ]
    },
    {
      id: "deepfakes",
      title: "Deepfake Exploitation",
      description: "AI-generated synthetic media can be created using your photos and videos to:",
      risks: [
        "Create fake compromising content",
        "Impersonate you in scams",
        "Damage your reputation",
        "Generate misleading voice clips"
      ]
    },
    {
      id: "identity-theft",
      title: "Identity Theft",
      description: "Cybercriminals can piece together personal information to:",
      risks: [
        "Open fraudulent accounts",
        "Apply for credit cards",
        "File fake tax returns",
        "Access your existing accounts"
      ]
    },
    {
      id: "data-theft",
      title: "Data Theft and Privacy Breaches",
      description: "Your personal information can be compromised through:",
      risks: [
        "Data breaches from platforms",
        "Third-party app access",
        "Tracking cookies and analytics",
        "Location data collection"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Digital Privacy Risks and Threats</h1>
      <p className="text-gray-600 mb-8">
        Understanding the potential risks of your social media activity can help you make more informed decisions about what you share online.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2">
        {digitalRisks.map((risk) => (
          <Card key={risk.id}>
            <CardHeader>
              <CardTitle>{risk.title}</CardTitle>
              <CardDescription>{risk.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {risk.risks.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Risks;
