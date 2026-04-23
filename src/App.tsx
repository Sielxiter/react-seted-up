import { Navigate, Route, Routes } from "react-router-dom"

import "./App.css"
import { DashboardPage } from "@/pages/dashboard-page"
import { SigninPage } from "@/pages/signin-page"
import { SignupPage } from "@/pages/signup-page"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sigin" replace />} />
      <Route path="/sigin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/sigin" replace />} />
    </Routes>
  )
}

export default App
