import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Notify } from "notiflix";
// import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();
  const createUser = async (userInfo) => {
    setLoading(true);
    try {
      await axios.post("http:localhost:5000/api/register", userInfo);
      Notify.success("Registration Success");
      setLoading(false);
    } catch (error) {
      Notify.failure("failed to register");
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const user = await axios
        .post("http://localhost:5000/api/login", email, password)
        .then((response) => console.log(response));
      Notify.success("login Success");
      setLoading(false);
      setUser(user);
    } catch (error) {
      Notify.failure("failed to login");
      setLoading(false);
      console.log(user);
    }
  };

  //   useEffect(() => {
  //     try {
  //       const userInfo = async () => {
  //         await axios.get("http:localhost:5000/api/user-details").then((data) => {
  //           setUser(data.data.user);
  //           setIsLoggedIn(true);
  //         });
  //       };
  //       userInfo();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, [loading]);
  const logOut = () => {
    setLoading(true);
    axios
      .get("/api/logout")
      .then(() => {
        Notify.success("Successfully logged out.");
        // navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const authInfo = {
    createUser,
    signIn,
    logOut,
    user,
    setUser,
    loading,
    setLoading,
    isLoggedIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
