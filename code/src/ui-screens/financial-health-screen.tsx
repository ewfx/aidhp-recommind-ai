import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Wallet, TrendingUp, AlertTriangle, CheckCircle, Home, ShoppingBag, Coffee, DollarSign } from 'lucide-react';

const FinancialHealthScreen = () => {
  // Sample data for the financial health trend chart
  const healthScoreData = [
    { month: 'Sep', score: 65 },
    { month: 'Oct', score: 68 },
    { month: 'Nov', score: 64 },
    { month: 'Dec', score: 67 },
    { month: 'Jan', score: 70 },
    { month: 'Feb', score: 72 },
    { month: 'Mar', score: 74 }
  ];
  
  // Sample data for spending breakdown
  const spendingData = [
    { category: 'Housing', percentage: 42, icon: <Home className="h-4 w-4" /> },
    { category: 'Groceries', percentage: 15, icon: <ShoppingBag className="h-4 w-4" /> },
    { category: 'Transportation', percentage: 12, icon: <DollarSign className="h-4 w-4" /> },
    { category: 'Dining', percentage: 8, icon: <Coffee className="h-4 w-4" /> },
    { category: 'Other', percentage: 23, icon: <DollarSign className="h-4 w-4" /> }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Financial Health Assessment</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Last updated: March 24, 2025</span>
        </div>
      </div>

      {/* Overall Score */}
      <Card className="mb-6 bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative w-48 h-48 flex items-center justify-center mb-4">
                <div className="absolute inset-0 rounded-full border-8 border-blue-100"></div>
                <div 
                  className="absolute inset-0 rounded-full border-8 border-transparent border-t-blue-500 border-r-blue-500 border-b-blue-500"
                  style={{ transform: 'rotate(40deg)' }}
                ></div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-blue-700">74</p>
                  <p className="text-sm text-gray-500">out of 100</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-800">GOOD</h3>
              <p className="text-sm text-gray-600 text-center">Your financial health is on track, with some areas for improvement</p>
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-sm text-gray-700 mb-4">
                Your financial health score has improved by <span className="font-bold text-green-600">+2 points</span> since last month. 
                Continue to build your emergency fund and reduce credit card debt to further improve your score.
              </p>
              
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={healthScoreData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#666" />
                    <YAxis domain={[50, 100]} stroke="#666" />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#2563eb" 
                      strokeWidth={2} 
                      dot={{ r: 4, fill: "#2563eb" }} 
                      activeDot={{ r: 6 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Areas of Assessment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <CardTitle>Emergency Readiness</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Score:</span>
              <span className="font-bold text-green-600">87/100</span>
            </div>
            <Progress value={87} className="h-2 mb-4" />
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="flex gap-2 items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  Your emergency fund of $6,140 covers 2.5 months of expenses. Aim for 3-6 months for improved security.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-yellow-500" />
              <CardTitle>Debt Management</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Score:</span>
              <span className="font-bold text-yellow-600">62/100</span>
            </div>
            <Progress value={62} className="h-2 mb-4" />
            <div className="bg-yellow-50 p-3 rounded-lg">
              <div className="flex gap-2 items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  Your debt-to-income ratio is 39.1%. Consider refinancing your mortgage to lower monthly payments.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-500" />
              <CardTitle>Retirement Planning</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Score:</span>
              <span className="font-bold text-red-600">45/100</span>
            </div>
            <Progress value={45} className="h-2 mb-4" />
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="flex gap-2 items-start">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  You're currently saving 4% of income for retirement. Consider increasing to at least 10-15% to meet retirement goals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Spending & Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Spending Breakdown</CardTitle>
            <CardDescription>Where your money went in March</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {spendingData.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{item.category}</span>
                      <span className="text-sm font-medium">{item.percentage}%</span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Personalized Recommendations</CardTitle>
            <CardDescription>Improve your financial health</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-medium text-green-800 mb-1">Mortgage Refinance Opportunity</h4>
                <p className="text-sm text-gray-700 mb-2">Rates are currently 0.5% lower than your existing mortgage. Refinancing could save $210/month.</p>
                <button className="text-sm bg-green-600 text-white px-3 py-1 rounded">Explore Options</button>
              </div>
              
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-1">Increase Retirement Contributions</h4>
                <p className="text-sm text-gray-700 mb-2">Adding just 2% more to your retirement plan would significantly improve your future security.</p>
                <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded">Learn More</button>
              </div>
              
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                <h4 className="font-medium text-purple-800 mb-1">Emergency Fund Boost</h4>
                <p className="text-sm text-gray-700 mb-2">Auto-transfer $100/month to your savings to reach your 3-month emergency fund goal by October.</p>
                <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded">Set Up Transfer</button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancialHealthScreen;
