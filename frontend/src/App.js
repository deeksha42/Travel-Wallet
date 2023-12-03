import React from "react";
import "./App.css";
import Landing from "./Routes/LandingPage/Landing";
import Home from "./Routes/Home";
import "bootstrap/dist/css/bootstrap.css";
import History from "./Routes/History/History";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./Routes/Login/LoginScreen";
import SignUpScreen from "./Routes/Signup/SignUpScreen";
import ExpenseScreen from "./Routes/Expense/ExpenseScreen";
import AddTrip from "./Routes/AddTrip/AddTrip";
import SingleLog from "./Routes/AddTrip/SingleLog";
import PopularDestinations from "./Routes/Explore/PopularDestinations";
import DestinationDetailPage from "./Routes/Explore/DestinationDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/history" element={<History />} />
        <Route path="/create" element={<AddTrip />} />
        <Route path="/expense" element={<ExpenseScreen />} /> 
        <Route exact path="/destination" element={<PopularDestinations />} />
        <Route path="/destination/:id" element={<DestinationDetailPage />} />
        <Route path="/logs/:id" element={<SingleLog />} />
      </Routes>
    </Router>
  );
}

export default App;
