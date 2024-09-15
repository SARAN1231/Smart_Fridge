import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import { Navigate } from "react-router-dom";
import Header from "../header";
import { Snackbar, Alert } from "@mui/material";
import ImageSlider from "./ImageSlider";
import Tables from "./Tables";
import "../../App.css";
import Footer from "./Footer";
import ProblemSolution from "./ProblemSolution";
import Team from "./TeamMemeber";
const Home = () => {
  const { currentUser } = useAuth();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [welcomeOpen, setWelcomeOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setWelcomeOpen(true); // Show the welcome toast when the component mounts
    }
  }, [currentUser]);

  const handleSignOut = async () => {
    try {
      await doSignOut();
      setOpen(true); // Show toast on success
    } catch (error) {
      setError("Error signing out");
      setOpen(true); // Show error toast
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setWelcomeOpen(false);
  };

  // If currentUser is null, redirect to the login page
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <h1
        className="text-6xl font-bold text-center"
        style={{ color: "#4CAF50" }}
      >
        Smart Agro Storage
      </h1>

      <div className="flex flex-col items-center justify-center pt-14 space-y-6">
        <ImageSlider />
      </div>
      <div className="flex flex-col items-center justify-center pt-14 space-y-6">
        <ProblemSolution />
      </div>
      <div className="flex flex-col items-center justify-center pt-14 space-y-6">
        <Tables />
      </div>
      <div className="flex flex-col items-center justify-center pt-14 space-y-6">
        <Team />
      </div>
      <Footer />

      {/* Welcome Toast */}
      <Snackbar
        open={welcomeOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position at the top center
        sx={{ top: 80 }} // Adjust top margin if needed
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Hello{" "}
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email}
          , you are now logged in.
        </Alert>
      </Snackbar>

      {/* Sign Out Toast */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position at the top center
        sx={{ top: 80 }} // Adjust top margin if needed
      >
        <Alert
          onClose={handleClose}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {error || "Signed out successfully"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
