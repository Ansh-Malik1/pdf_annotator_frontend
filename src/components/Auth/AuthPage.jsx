import React, { useState } from 'react';
import { AuthForm } from './Authform';

export const AuthPage = () => {
  const [mode, setMode] = useState('login');

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  return <AuthForm mode={mode} onToggleMode={toggleMode} />;
};