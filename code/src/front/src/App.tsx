import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import React from 'react';
import { Toaster } from "@/components/ui/sonner"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataUploadPage from './pages/DataUpload';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DataUploadPage />} />
          {/* Add other routes */}
        </Routes>
        <Toaster />
      </div>
    </Router>
  )
}

export default App
