//src/App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import HowItWorks from "./components/HowItWorks";
import BookEnquiry from "./components/BookEnquiry";
import MissionAndVision from "./components/MissionAndVision";
import RefundPolicy from "./components/RefundPolicy";
import Quote from "./components/Quote";
import CancelBooking from "./components/CancelBooking";
import FAQS from "./components/FAQS";
import TermsAndCondition from "./components/TermsAndCondition";
import AppAppBar from "./components/AppAppBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProtectedComponent from "./components/ProtectedComponent";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import ForgotPassword from "./components/ForgotPassword";
import WebDashboard from "./components/WebDashboard";
import ScreenLoader from "./components/ScreenLoader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <ScreenLoader />;
  }
  return (
    <Router>
      <AuthProvider>
        <AppAppBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/process" element={<HowItWorks />} />
          <Route path="/help" element={<BookEnquiry />} />
          <Route path="/mission" element={<MissionAndVision />} />
          <Route path="/refunds" element={<RefundPolicy />} />
          <Route path="/cancel" element={<CancelBooking />} />
          <Route path="/faq" element={<FAQS />} />
          <Route path="/tnc" element={<TermsAndCondition />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/protected-route"
            element={
              <PrivateRoute>
                <ProtectedComponent />
              </PrivateRoute>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<WebDashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
