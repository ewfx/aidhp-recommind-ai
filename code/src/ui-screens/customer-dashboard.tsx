import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowUp, ArrowDown, AlertCircle, TrendingUp, Clock, DollarSign, CreditCard, Home, Briefcase } from 'lucide-react';

const CustomerDashboard = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Welcome, Michael!</h1>
        <div className="rounded-md bg-blue-50 p-2 text-blue-700 flex items-center">
          <span className="font-semibold">Financial Health Score:</span>
          <span className="ml-2 text-xl font-bold">72</span>
          <span className="ml-2 text-sm">/100</span>
          <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
        </div>
      </div>

      {/* Account Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-500">Checking Account</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$1,942.04</p>
            <div className="flex items-center mt-2 text-sm">
              <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
              <span className="text-red-500">-$152.30 this week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-500">Savings Account</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$6,140.57</p>
            <div className="flex items-center mt-2 text-sm">
              <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+$300.00 this month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-500">Credit Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$1,358.42</p>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-gray-600">Limit: $5,000.00</span>
              <span className="mx-2">|</span>
              <span className="text-green-600">Available: $3,641.58</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Financial Insights</CardTitle>
              <CardDescription>Recent analysis of your financial activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-2 rounded-lg bg-amber-50">
                  <AlertCircle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-700">Mortgage Rate Opportunity</h4>
                    <p className="text-sm text-gray-600">Current mortgage rates are 0.5% lower than your existing rate. Refinancing could save you approximately $210/month.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-2 rounded-lg bg-green-50">
                  <TrendingUp className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-700">Savings Goal Progress</h4>
                    <p className="text-sm text-gray-600">You're on track to meet your emergency fund goal by August 2025.</p>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress: 61%</span>
                        <span>$6,140 / $10,000</span>
                      </div>
                      <Progress value={61} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Last 5 transactions across all accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { date: 'Mar 22', desc: 'Grocery Store', amount: '-$118.65', category: 'Groceries', icon: <DollarSign className="h-4 w-4" /> },
                  { date: 'Mar 21', desc: 'Monthly Rent', amount: '-$498.62', category: 'Housing', icon: <Home className="h-4 w-4" /> },
                  { date: 'Mar 20', desc: 'Gas Station', amount: '-$52.30', category: 'Transportation', icon: <DollarSign className="h-4 w-4" /> },
                  { date: 'Mar 19', desc: 'Paycheck', amount: '+$1,720.00', category: 'Income', icon: <Briefcase className="h-4 w-4" /> },
                  { date: 'Mar 18', desc: 'Online Shopping', amount: '-$67.92', category: 'Shopping', icon: <CreditCard className="h-4 w-4" /> }
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        {tx.icon}
                      </div>
                      <div>
                        <p className="font-medium">{tx.desc}</p>
                        <p className="text-xs text-gray-500">{tx.date} · {tx.category}</p>
                      </div>
                    </div>
                    <p className={`font-medium ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-gray-800'}`}>
                      {tx.amount}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800">Recommended for You</CardTitle>
              <CardDescription>Based on your financial profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white p-3 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold">Mortgage Refinance</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Lower your monthly payments with our competitive rates.</p>
                  <button className="w-full bg-blue-600 text-white py-1.5 rounded-md text-sm font-medium">Learn More</button>
                </div>

                <div className="bg-white p-3 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold">Premium Credit Card</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">2% cashback on all purchases, no annual fee.</p>
                  <button className="w-full bg-blue-600 text-white py-1.5 rounded-md text-sm font-medium">Learn More</button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Life Event Detected</CardTitle>
              <CardDescription>We noticed a potential life change</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Home className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Home Purchase?</h4>
                    <p className="text-xs text-gray-500">Detected from your recent activity</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">We've noticed patterns suggesting you might be considering a home purchase soon.</p>
                <button className="w-full bg-yellow-600 text-white py-2 rounded-md text-sm font-medium">Explore Home Buying Options</button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Health</CardTitle>
              <CardDescription>Your progress towards financial wellness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Emergency Fund</span>
                    <span className="font-medium">Good</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Debt Management</span>
                    <span className="font-medium">Fair</span>
                  </div>
                  <Progress value={55} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Retirement Readiness</span>
                    <span className="font-medium">Needs Attention</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <button className="w-full mt-2 bg-blue-100 text-blue-800 py-2 rounded-md text-sm font-medium">View Full Assessment</button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
