import React, { useReducer } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { fetchAPI } from "./API/GetData";
import { submitAPI } from "./API/GetData";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";
import SuccessPage from "./components/SuccessPage";
import Menu from "./components/Menu";
import Login from "./components/Login";

function updateTimes(availableTimes, action) {
  return {
    times: availableTimes.times.filter((value) => value !== action.value),
  };
}

const today = new Date();

export function initializeTimes() {
  const times = fetchAPI(today);
  return { times: times };
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const location = useLocation();

  return (
    <ChakraProvider>
      <div className="App">
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/bookingForm"
              element={
                <BookingForm
                  initialTimes={availableTimes}
                  submitForm={submitAPI}
                />
              }
            />
            <Route
              path="/ConfirmedBooking"
              element={<ConfirmedBooking dispatch={dispatch} />}
            />
            <Route path="/SuccessPage" element={<SuccessPage />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
          </Routes>

          {location.pathname === "/HomePage" && <Footer />}
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
