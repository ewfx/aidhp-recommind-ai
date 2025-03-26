import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, Users, Building2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ScheduleDemo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Schedule a Demo</h1>
            <p className="text-gray-600">Experience how RecomMind AI can transform your banking operations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Demo Overview</CardTitle>
                <CardDescription className="text-blue-700">What you'll learn in this demo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">Customer Segmentation</h4>
                      <p className="text-sm text-blue-700">See how we analyze and segment your customer base</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">Predictive Analytics</h4>
                      <p className="text-sm text-blue-700">Understand our AI-powered prediction models</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">Integration Capabilities</h4>
                      <p className="text-sm text-blue-700">Learn about our seamless integration with your systems</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Demo</CardTitle>
                <CardDescription>Choose a time that works best for you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Date</h4>
                      <p className="text-sm text-gray-500">Select your preferred date</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Clock className="h-5 w-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Time</h4>
                      <p className="text-sm text-gray-500">Choose your preferred time slot</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Video className="h-5 w-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium">Meeting Type</h4>
                      <p className="text-sm text-gray-500">Virtual or In-person</p>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Schedule Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle>Why Choose RecomMind AI?</CardTitle>
              <CardDescription>Key benefits of our solution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium mb-2">Increased Revenue</h4>
                  <p className="text-sm text-gray-600">Boost your revenue through personalized recommendations</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-medium mb-2">Better Customer Experience</h4>
                  <p className="text-sm text-gray-600">Deliver personalized experiences that customers love</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium mb-2">Easy Integration</h4>
                  <p className="text-sm text-gray-600">Seamlessly integrate with your existing systems</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDemo;
