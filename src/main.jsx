import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import AddCoffee from "./components/AddCoffee.jsx";
import Details from "./components/Details.jsx";
import Home from "./components/Home.jsx";
import LogIn from "./components/LogIn.jsx";
import MainlayOut from "./components/MainlayOut.jsx";
import SignUp from "./components/SignUp.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import User from "./components/User.jsx";
import Users from "./components/Users.jsx";
import Users2 from "./components/Users2.jsx";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainlayOut />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/addCoffee" element={<AddCoffee />} />
              <Route path="/updateCoffee/:id" element={<UpdateCoffee />} />
              <Route path="/coffeeDetails/:id" element={<Details />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users2" element={<Users2 />} />
              <Route path="/users/:id" element={<User />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
