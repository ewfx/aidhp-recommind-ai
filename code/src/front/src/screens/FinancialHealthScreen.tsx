import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, TrendingUp, DollarSign, CreditCard, Home, Briefcase, PiggyBank } from "lucide-react";

const FinancialHealthScreen = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Financial Health Assessment</h1>
        <div className="rounded-md bg-blue-50 p-2 text-blue-700 flex items-center">
          <span className="font-semibold">Overall Score:</span>
          <span className="ml-2 text-xl font-bold">72</span>
          <span className="ml-2 text-sm">/100</span>
          <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Emergency Fund Status</CardTitle>
              <CardDescription>Your safety net for unexpected expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PiggyBank className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">Current Balance</span>
                  </div>
                  <span className="text-2xl font-bold">$6,140.57</span>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Progress to Goal</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-700">You're on track to reach your $10,000 emergency fund goal by August 2025.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Debt Management</CardTitle>
              <CardDescription>Overview of your debt obligations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-red-500" />
                    <span className="font-medium">Credit Card Balance</span>
                  </div>
                  <span className="text-2xl font-bold">$1,358.42</span>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Utilization Rate</span>
                    <span className="font-medium">27%</span>
                  </div>
                  <Progress value={27} className="h-2" />
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <p className="text-sm text-amber-700">Consider paying down your credit card balance to improve your credit score.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Retirement Readiness</CardTitle>
              <CardDescription>Your progress towards retirement goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-purple-500" />
                    <span className="font-medium">Retirement Savings</span>
                  </div>
                  <span className="text-2xl font-bold">$45,000</span>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Progress to Goal</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-sm text-red-700">Consider increasing your retirement contributions to meet your goals.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
              <CardDescription>Personalized suggestions to improve your financial health</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <PiggyBank className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Increase Emergency Fund</h4>
                      <p className="text-sm text-gray-600">Set up automatic transfers to reach your $10,000 goal faster.</p>
                      <button className="mt-2 bg-blue-100 text-blue-800 py-1.5 px-3 rounded-md text-sm font-medium">Set Up Auto-Save</button>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Debt Consolidation</h4>
                      <p className="text-sm text-gray-600">Consider consolidating your credit card debt with a personal loan at 5.99% APR.</p>
                      <button className="mt-2 bg-green-100 text-green-800 py-1.5 px-3 rounded-md text-sm font-medium">Learn More</button>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Boost Retirement Savings</h4>
                      <p className="text-sm text-gray-600">Increase your 401(k) contribution by 2% to get closer to your retirement goals.</p>
                      <button className="mt-2 bg-purple-100 text-purple-800 py-1.5 px-3 rounded-md text-sm font-medium">Adjust Contributions</button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Milestones</CardTitle>
              <CardDescription>Track your progress towards key financial goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Emergency Fund Goal</h4>
                    <p className="text-sm text-gray-500">$10,000 target</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$6,140.57</p>
                    <p className="text-sm text-green-600">61% complete</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Debt-Free Goal</h4>
                    <p className="text-sm text-gray-500">Pay off credit cards</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$1,358.42</p>
                    <p className="text-sm text-amber-600">73% remaining</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Retirement Goal</h4>
                    <p className="text-sm text-gray-500">$150,000 target</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$45,000</p>
                    <p className="text-sm text-red-600">30% complete</p>
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

export default FinancialHealthScreen;
