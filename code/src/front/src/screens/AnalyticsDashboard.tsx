import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from "recharts";

// Mock data for Product Performance
const productPerformanceData = [
  { month: "Jan", adoption: 65 },
  { month: "Feb", adoption: 72 },
  { month: "Mar", adoption: 85 },
  { month: "Apr", adoption: 78 },
  { month: "May", adoption: 90 },
  { month: "Jun", adoption: 95 },
];

// Mock data for Customer Segmentation
const customerSegmentationData = [
  { name: "Premium", value: 35 },
  { name: "Standard", value: 45 },
  { name: "Basic", value: 20 },
];

// Mock data for Revenue Trends
const revenueTrendsData = [
  { month: "Jan", revenue: 150000 },
  { month: "Feb", revenue: 165000 },
  { month: "Mar", revenue: 180000 },
  { month: "Apr", revenue: 195000 },
  { month: "May", revenue: 220000 },
  { month: "Jun", revenue: 250000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const AnalyticsDashboard: React.FC = () => {
  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="rounded-md bg-blue-50 p-2 text-blue-700">
            <span className="font-semibold">Total Customers: </span>
            <span className="text-xl font-bold">2,847</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Product Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Product Performance</CardTitle>
            <CardDescription>Monthly product adoption rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="adoption" fill="#3B82F6" name="Adoption Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Customer Segmentation Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Segmentation</CardTitle>
            <CardDescription>Distribution of customer segments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={customerSegmentationData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
                    {customerSegmentationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Trends Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
            <CardDescription>Monthly revenue analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueTrendsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={formatCurrency} />
                  <Tooltip formatter={(value) => formatCurrency(value as number)} />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#22C55E" strokeWidth={2} name="Revenue" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Customer Health Score */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Health Score</CardTitle>
            <CardDescription>Distribution of customer health scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Excellent (80-100)</span>
                  <span className="font-bold">45%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Good (60-79)</span>
                  <span className="font-bold">35%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Fair (40-59)</span>
                  <span className="font-bold">15%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "15%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Poor (0-39)</span>
                  <span className="font-bold">5%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: "5%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
