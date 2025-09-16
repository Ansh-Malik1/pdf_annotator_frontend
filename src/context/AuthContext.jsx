import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Base URL for your backend
  const API_URL = "http://localhost:5000/api/auth";

  // run once on load: check token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      verifyToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/signup`, { email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const verifyToken = async (token) => {
    try {
      const res = await axios.get(`${API_URL}/verify`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);
    } catch (error) {
      console.error("Token verification failed:", error.response?.data || error.message);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
