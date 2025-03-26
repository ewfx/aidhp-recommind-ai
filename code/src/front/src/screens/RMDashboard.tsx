import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, TrendingUp, DollarSign, CreditCard, Home, Briefcase, Users, Phone, Mail, Calendar } from "lucide-react";

const RMDashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Relationship Manager Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="rounded-md bg-blue-50 p-2 text-blue-700 flex items-center">
            <Users className="h-4 w-4 mr-2" />
            <span className="font-semibold">Active Clients:</span>
            <span className="ml-2 text-xl font-bold">24</span>
          </div>
          <div className="rounded-md bg-green-50 p-2 text-green-700 flex items-center">
            <TrendingUp className="h-4 w-4 mr-2" />
            <span className="font-semibold">Portfolio Growth:</span>
            <span className="ml-2 text-xl font-bold">+12.5%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Next Best Actions</CardTitle>
              <CardDescription>Recommended actions for your clients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Home className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Michael Johnson</h4>
                      <p className="text-sm text-gray-600">Mortgage refinance opportunity - rates are 0.5% lower than current rate.</p>
                      <div className="flex gap-2 mt-2">
                        <button className="bg-blue-100 text-blue-800 py-1.5 px-3 rounded-md text-sm font-medium">Schedule Call</button>
                        <button className="bg-gray-100 text-gray-800 py-1.5 px-3 rounded-md text-sm font-medium">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Williams</h4>
                      <p className="text-sm text-gray-600">Premium credit card recommendation - 2% cashback on all purchases.</p>
                      <div className="flex gap-2 mt-2">
                        <button className="bg-green-100 text-green-800 py-1.5 px-3 rounded-md text-sm font-medium">Schedule Call</button>
                        <button className="bg-gray-100 text-gray-800 py-1.5 px-3 rounded-md text-sm font-medium">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">David Chen</h4>
                      <p className="text-sm text-gray-600">Retirement planning review - opportunity to increase 401(k) contributions.</p>
                      <div className="flex gap-2 mt-2">
                        <button className="bg-purple-100 text-purple-800 py-1.5 px-3 rounded-md text-sm font-medium">Schedule Call</button>
                        <button className="bg-gray-100 text-gray-800 py-1.5 px-3 rounded-md text-sm font-medium">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Portfolio Overview</CardTitle>
              <CardDescription>Summary of your client portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Total Assets</h4>
                  <p className="text-2xl font-bold mt-2">$2.4M</p>
                  <p className="text-sm text-blue-600 mt-1">+8.2% this month</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">New Clients</h4>
                  <p className="text-2xl font-bold mt-2">3</p>
                  <p className="text-sm text-green-600 mt-1">This month</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Product Adoption</h4>
                  <p className="text-2xl font-bold mt-2">68%</p>
                  <p className="text-sm text-purple-600 mt-1">Of recommended products</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Meetings</CardTitle>
              <CardDescription>Your scheduled client meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { time: "10:00 AM", name: "Michael Johnson", type: "Mortgage Review", icon: <Home className="h-4 w-4" /> },
                  { time: "2:30 PM", name: "Sarah Williams", type: "Credit Card Application", icon: <CreditCard className="h-4 w-4" /> },
                  { time: "4:00 PM", name: "David Chen", type: "Retirement Planning", icon: <Briefcase className="h-4 w-4" /> },
                ].map((meeting, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">{meeting.icon}</div>
                    <div>
                      <p className="font-medium">{meeting.name}</p>
                      <p className="text-sm text-gray-500">{meeting.type}</p>
                    </div>
                    <div className="ml-auto text-sm text-gray-500">{meeting.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center gap-2 p-3 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100">
                  <Phone className="h-5 w-5" />
                  <span>Schedule Call</span>
                </button>
                <button className="flex items-center gap-2 p-3 rounded-lg bg-green-50 text-green-800 hover:bg-green-100">
                  <Mail className="h-5 w-5" />
                  <span>Send Email</span>
                </button>
                <button className="flex items-center gap-2 p-3 rounded-lg bg-purple-50 text-purple-800 hover:bg-purple-100">
                  <Calendar className="h-5 w-5" />
                  <span>View Calendar</span>
                </button>
                <button className="flex items-center gap-2 p-3 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100">
                  <Users className="h-5 w-5" />
                  <span>Client List</span>
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Health Scores</CardTitle>
              <CardDescription>Overview of client financial health</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Michael Johnson</span>
                    <span className="font-medium">72/100</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Sarah Williams</span>
                    <span className="font-medium">85/100</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>David Chen</span>
                    <span className="font-medium">63/100</span>
                  </div>
                  <Progress value={63} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RMDashboard;
