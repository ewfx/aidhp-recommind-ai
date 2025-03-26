import React, { useState } from 'react';
import { ChevronDown, Search, Filter, Plus, ArrowUp, ArrowDown, Home, MessageCircle, FileText, CreditCard, BarChart2, Settings, Users } from 'lucide-react';

// Customer type definition
interface Customer {
  id: string;
  name: string;
  since: string;
  lastContact: string;
  healthScore: number;
  tag: string;
  actions: number;
  trend: 'up' | 'down';
  totalBalance: string;
  investments: string;
  loans: string;
  balanceChange: string;
  investmentChange: string;
  loanChange: string;
}

// Sample data
const customers: Customer[] = [
  {
    id: '#38291',
    name: 'Sarah Johnson',
    since: '2021',
    lastContact: 'Mar 15, 2025',
    healthScore: 80,
    tag: 'Life Event',
    actions: 3,
    trend: 'up',
    totalBalance: '$128,450',
    investments: '$85,200',
    loans: '$320,000',
    balanceChange: '↑ 3.2% from last month',
    investmentChange: '↑ 2.8% from last month',
    loanChange: '↑ 0% from last month'
  },
  {
    id: '#42587',
    name: 'Michael Chen',
    since: '2019',
    lastContact: 'Mar 10, 2025',
    healthScore: 60,
    tag: 'Mortgage',
    actions: 5,
    trend: 'down',
    totalBalance: '$85,300',
    investments: '$32,450',
    loans: '$275,000',
    balanceChange: '↓ 1.7% from last month',
    investmentChange: '↑ 0.5% from last month',
    loanChange: '↑ 0% from last month'
  },
  {
    id: '#29145',
    name: 'Emily Rodriguez',
    since: '2022',
    lastContact: 'Mar 18, 2025',
    healthScore: 90,
    tag: 'Investments',
    actions: 2,
    trend: 'up',
    totalBalance: '$215,700',
    investments: '$145,800',
    loans: '$152,000',
    balanceChange: '↑ 4.3% from last month',
    investmentChange: '↑ 5.1% from last month',
    loanChange: '↓ 2.5% from last month'
  }
];

// Actions type definition
interface Action {
  title: string;
  priority: 'high' | 'medium' | 'low';
}

// Sample actions
const actions: Action[] = [
  { title: 'Offer Home Mortgage Pre-Approval', priority: 'high' },
  { title: 'Schedule Financial Planning Consultation', priority: 'medium' },
  { title: 'Recommend Home Insurance Options', priority: 'low' }
];

const RelationshipManagerDashboard: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>(customers[0]);
  const [activeTab, setActiveTab] = useState<string>('Overview');

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-orange-500';
      case 'low':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getHealthColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getIndicatorColor = (tag: string) => {
    if (tag === 'Life Event') return 'bg-orange-500';
    if (tag === 'Investments') return 'bg-green-500';
    return 'bg-blue-500';
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-56 bg-blue-50 shadow-md">
        <div className="p-4 bg-blue-700 text-white font-bold text-xl h-16 flex items-center">
          RecomMind AI
        </div>
        <div className="p-4">
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">MAIN MENU</p>
          </div>
          <ul>
            <li className="mb-2">
              <button className="flex items-center w-full p-2 rounded bg-blue-700 text-white">
                <Users className="mr-2 h-5 w-5" />
                <span>Customer Overview</span>
              </button>
            </li>
            <li className="mb-2">
              <button className="flex items-center w-full p-2 rounded text-gray-700 hover:bg-blue-100">
                <BarChart2 className="mr-2 h-5 w-5" />
                <span>Performance Metrics</span>
              </button>
            </li>
            <li className="mb-2">
              <button className="flex items-center w-full p-2 rounded text-gray-700 hover:bg-blue-100">
                <Users className="mr-2 h-5 w-5" />
                <span>Team Management</span>
              </button>
            </li>
            <li className="mb-2">
              <button className="flex items-center w-full p-2 rounded text-gray-700 hover:bg-blue-100">
                <CreditCard className="mr-2 h-5 w-5" />
                <span>Product Catalog</span>
              </button>
            </li>
            <li className="mb-2">
              <button className="flex items-center w-full p-2 rounded text-gray-700 hover:bg-blue-100">
                <BarChart2 className="mr-2 h-5 w-5" />
                <span>Analytics</span>
              </button>
            </li>
            <li className="mb-2">
              <button className="flex items-center w-full p-2 rounded text-gray-700 hover:bg-blue-100">
                <Settings className="mr-2 h-5 w-5" />
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-6">
          <h1 className="text-xl font-bold">Customer Overview</h1>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search customers..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md">
              <Filter className="h-5 w-5 mr-2" />
              <span>Filter</span>
            </button>
            <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md">
              <Plus className="h-5 w-5 mr-2" />
              <span>New</span>
            </button>
            <div className="flex items-center ml-4">
              <div className="text-right mr-3">
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-gray-500">Relationship Manager</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold">
                JD
              </div>
            </div>
          </div>
        </header>
        
        <div className="p-6 grid grid-cols-3 gap-6">
          {/* Customer List Column */}
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Priority Customers</h2>
            
            <div className="space-y-4">
              {customers.map((customer, index) => (
                <div 
                  key={customer.id}
                  className={`p-4 bg-white rounded-lg border-2 ${selectedCustomer.id === customer.id ? 'border-blue-500' : 'border-gray-200'} relative cursor-pointer`}
                  onClick={() => setSelectedCustomer(customer)}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${getIndicatorColor(customer.tag)}`}></div>
                  
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg">{customer.name}</h3>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${customer.trend === 'up' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                      {customer.trend === 'up' ? <ArrowUp className="h-5 w-5" /> : <ArrowDown className="h-5 w-5" />}
                    </div>
                  </div>
                  
                  <p className="text-gray-500 text-sm">Customer ID: {customer.id}</p>
                  <p className="text-gray-500 text-sm mb-2">Last Contact: {customer.lastContact}</p>
                  
                  {/* Health Score Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className={`${getHealthColor(customer.healthScore)} h-2 rounded-full`} 
                      style={{ width: `${customer.healthScore}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-3">Financial Health Score: {customer.healthScore}/100</p>
                  
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">{customer.tag}</span>
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full">{customer.actions} Actions</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Customer Detail Column */}
          <div className="col-span-2 bg-white rounded-lg shadow">
            {/* Customer Header */}
            <div className="bg-gray-50 p-6 rounded-t-lg border-b border-gray-200">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-bold">{selectedCustomer.name}</h2>
                  <p className="text-gray-500">Premium Banking Customer since {selectedCustomer.since}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-full flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact
                  </button>
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Notes
                  </button>
                </div>
              </div>
            </div>
            
            {/* Customer Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex">
                {['Overview', 'Financial Health', 'Products', 'History'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === tab
                        ? 'border-b-2 border-blue-500 text-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Financial Summary</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-500 mb-2">Total Balance</p>
                    <p className="text-2xl font-bold">{selectedCustomer.totalBalance}</p>
                    <p className="text-green-500 text-sm">{selectedCustomer.balanceChange}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-gray-500 mb-2">Investments</p>
                    <p className="text-2xl font-bold">{selectedCustomer.investments}</p>
                    <p className="text-green-500 text-sm">{selectedCustomer.investmentChange}</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-500 mb-2">Loans</p>
                    <p className="text-2xl font-bold">{selectedCustomer.loans}</p>
                    <p className="text-gray-500 text-sm">{selectedCustomer.loanChange}</p>
                  </div>
                </div>
              </div>
              
              {/* Life Events Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Detected Life Events</h3>
                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg flex items-center">
                  <div className="h-10 w-10 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4">
                    <Home className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Potential Home Purchase</h4>
                    <p className="text-gray-600 text-sm">Multiple searches for real estate sites and increased savings pattern detected</p>
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm">
                    View Details
                  </button>
                </div>
              </div>
              
              {/* Next Best Actions */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Next Best Actions</h3>
                <div className="space-y-3">
                  {actions.map((action, index) => (
                    <div key={index} className="border border-gray-200 p-4 rounded-lg flex items-center relative">
                      <div className={`absolute left-0 top-0 bottom-0 w-1 ${getPriorityColor(action.priority)}`}></div>
                      <div className="flex-1 ml-2">
                        <h4 className="font-semibold">{action.title}</h4>
                      </div>
                      <div className={`${getPriorityColor(action.priority)} px-4 py-1 rounded-full text-white text-sm capitalize`}>
                        {action.priority} Priority
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelationshipManagerDashboard;
