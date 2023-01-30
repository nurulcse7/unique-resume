import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPass } from "../../redux/action/user";

const ForgotPassword = () => {
  const { success } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState({
    email: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPass(userInfo));
  };

  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [success, navigate]);
  useEffect(() => {
    axios.get("/api/allusers").then((res) => console.log(res.data));
  }, []);
  return (
    <div className="py-[20%] flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="md:w-1/3 w-2/3 rounded-xl bg-secondary p-10"
      >
        <div className="space-y-1 my-3 text-sm  ">
          <label htmlFor="username" className="block text-white">
            Find Your Account And Sent the Forgot Password link
          </label>
          <input
            type="email"
            name="email"
            required
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            placeholder="Email"
            className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
          />
        </div>
        <div className="mt-4 mx-auto">
          <button
            type="submit"
            className={`input bg-primary/60 hover:bg-primary duration-300 font-semibold text-white py-3 rounded-md px-4  `}
          >
            Sent Link To your Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
