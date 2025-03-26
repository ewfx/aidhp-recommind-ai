import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DataUpload from "./pages/DataUpload";
import CustomerDashboard from "./screens/CustomerDashboard";
import AnalyticsDashboard from "./screens/AnalyticsDashboard";
import RMDashboard from "./screens/RMDashboard";
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Layout fullWidth>
                  <LandingPage />
                </Layout>
              }
            />
            <Route
              path="/data-upload"
              element={
                <Layout>
                  <DataUpload />
                </Layout>
              }
            />
            <Route
              path="/customer-dashboard"
              element={
                <Layout>
                  <CustomerDashboard />
                </Layout>
              }
            />
            <Route
              path="/analytics-dashboard"
              element={
                <Layout>
                  <AnalyticsDashboard />
                </Layout>
              }
            />
            <Route
              path="/rm-dashboard"
              element={
                <Layout>
                  <RMDashboard />
                </Layout>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
