"use client"; // Add this directive at the top

import { useState } from 'react';
import Login from '../Components/Login';
import Forgot from '../Components/Forgot';
import Reset from '../Components/Reset';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <>
      {currentPage === 'login' && (
        <Login onForgotPassword={() => setCurrentPage('forgot')} />
      )}
      {currentPage === 'forgot' && (
        <Forgot onBackToLogin={() => setCurrentPage('login')} onResetPassword={() => setCurrentPage('reset')} />
      )}
      {currentPage === 'reset' && (
        <Reset onBackToLogin={() => setCurrentPage('login')} />
      )}
    </>
  );
}
