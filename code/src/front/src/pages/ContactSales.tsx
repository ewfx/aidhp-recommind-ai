import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Building2, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactSales = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Contact Sales</h1>
            <p className="text-gray-600">Get in touch with our sales team to learn more about RecomMind AI</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to our sales team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-sm text-gray-500">sales@recommindai.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="h-5 w-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Building2 className="h-5 w-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Office</h4>
                      <p className="text-sm text-gray-500">
                        123 Business Ave, Suite 100
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Request Information</CardTitle>
                <CardDescription>Fill out the form below</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Users className="h-5 w-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Company Size</h4>
                      <p className="text-sm text-gray-500">Select your company size</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Building2 className="h-5 w-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Industry</h4>
                      <p className="text-sm text-gray-500">Select your industry</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-sm text-gray-500">Enter your email address</p>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Request <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Why Choose RecomMind AI?</CardTitle>
              <CardDescription className="text-blue-700">Key features and benefits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-800">AI-Powered Insights</h4>
                      <p className="text-sm text-blue-700">Advanced analytics and predictive modeling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-800">Personalized Recommendations</h4>
                      <p className="text-sm text-blue-700">Tailored financial product suggestions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-800">Regulatory Compliance</h4>
                      <p className="text-sm text-blue-700">Built-in compliance and security features</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-800">Easy Integration</h4>
                      <p className="text-sm text-blue-700">Seamless integration with existing systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-800">24/7 Support</h4>
                      <p className="text-sm text-blue-700">Dedicated support team always available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-800">Scalable Solution</h4>
                      <p className="text-sm text-blue-700">Grows with your business needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSales;
