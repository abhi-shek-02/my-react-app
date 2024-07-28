import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './components/About';
import ContactUs from './components/ContactUs';
import HowItWorks from './components/HowItWorks';
import BookEnquiry from './components/BookEnquiry';
import MissionAndVision from './components/MissionAndVision';
import RefundPolicy from './components/RefundPolicy';
import Quote from './components/Quote';
import CancelBooking from './components/CancelBooking';
import FAQS from './components/FAQS';
import TermsAndCondition from './components/TermsAndCondition';
import AppAppBar from './components/AppAppBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProtectedComponent from './components/ProtectedComponent';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import ForgotPassword from './components/ForgotPassword';

function App() {
    const [mode, setMode] = React.useState('dark');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'dark'));
  };
  return (
    <Router>
      <AuthProvider>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/book-enquiry" element={<BookEnquiry />} />
          <Route path="/mission-and-vision" element={<MissionAndVision />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cancel-booking" element={<CancelBooking />} />
          <Route path="/faq" element={<FAQS />} />
          <Route path="/terms-conditions" element={<TermsAndCondition />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/protected-route" element={<PrivateRoute><ProtectedComponent /></PrivateRoute>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

