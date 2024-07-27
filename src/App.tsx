import React from 'react';
import { BrowserRouter as Router, Routes ,Route  } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './components/About';
import ContactUs from './components/ContactUs';
import HowItWorks from './components/HowItWorks';
import BookEnquiry from './components/BookEnquiry';
import MissionAndVision from './components/MissionAndVision';
import RefundPolicy from './components/RefundPolicy';
import Quote from './components/Quote';
import './App.css'
import CancelBooking from './components/CancelBooking';
import FAQS from './components/FAQS';
import TermsAndCondition from './components/TermsAndCondition';



function App() {
  return (
    <Router>
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
        {/*  */}
      </Routes>
    </Router>
  );
}

export default App;
