import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConsultingReadoutPage from './pages/ConsultingReadoutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConsultingReadoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;