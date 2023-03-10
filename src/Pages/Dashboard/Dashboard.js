import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../redux/action/user";
import axiosInstance from "../../utils/axiosInstance";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // for update form
  const handleUpdateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const mobileNumber = form.number.value;
    const userInfo = {
      name: name,
      address: address,
      mobileNumber: mobileNumber,
    };

    dispatch(updateProfile(userInfo));
  };

  const handleDeleteUser = (id) => {
    const confirm = window.confirm("Do You want to Delete Your account?");

    if (confirm) {
      axiosInstance
        .delete("/api/user-delete", {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data) {
            toast.success("Delete Account SuccessFull");
            localStorage.removeItem("token");
            navigate("/register");
          }
        });
    } else {
      return;
    }
  };

  return (
    <div className="w-[70%] mx-auto  mt-7">
      <h1 className="text-5xl font-bold my-5">My Account</h1>
      <form onSubmit={handleUpdateForm} className="w-[90%] mx-auto">
        <div>
          <label htmlFor="name">
            {" "}
            <input
              placeholder={user?.name}
              className="w-full pt-2 pb-1 px-3 my-2 border-b border-white bg-inherit focus:outline-none "
              type="text"
              name="name"
              id="name"
            />
          </label>
          <label htmlFor="address">
            {" "}
            <input
              placeholder={user?.address ? `${user.address}` : "Address"}
              className="w-full pt-2 pb-1 px-3 my-2 border-b border-white bg-inherit focus:outline-none "
              type="text"
              name="address"
              id="address"
            />
          </label>
          <label htmlFor="number">
            {" "}
            <input
              placeholder={
                user?.mobileNumber ? `${user.mobileNumber}` : `Phone number`
              }
              className="w-full pt-2 pb-1 px-3 my-2 border-b border-white bg-inherit focus:outline-none "
              type="number"
              name="number"
              id="number"
            />
          </label>

          <label htmlFor="email">
            {" "}
            <input
              placeholder={user?.email}
              className="w-full pt-2 pb-1 px-3 my-2 border-b border-white bg-inherit focus:outline-none "
              type="email"
              name="email"
              id="email"
              readOnly
              disabled
              defaultValue={user?.email}
            />
          </label>
          <p>
            <button
              className="bg-primary md:text-[15px] text-[12px] mt-2 uppercase cursor-pointer   text-white  rounded shadow hover:shadow-lg py-1 md:py-2 z-10 px-4 border border-primary hover:border-transparent"
              type="submit"
            >
              Update Now
            </button>
          </p>
        </div>
      </form>

      <div className="mt-7">
        <button
          onClick={() => handleDeleteUser(2)}
          className="font-bold text-sky-500 underline"
        >
          Delete Your Account
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
