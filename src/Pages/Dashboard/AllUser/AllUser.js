import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/action/data";
import { FaTrashAlt, FaUserCog } from "react-icons/fa";
import axiosInstance from "../../../utils/axiosInstance.js";
import { toast } from "react-toastify";
const AllUser = () => {
  const data = useSelector((state) => state.allUserData.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleDeleteUser = (id) => {
    axiosInstance
      .delete(`/api/delete-user/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data) {
          dispatch(getAllUsers());
          toast.success("User Deleted SuccessFully");
        }
      });
  };

  return (
    <div>
      <div className="w-[96%] mx-auto mt-2 mb-3">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">Name</th>
              <th className="py-3 px-6 text-center">Email</th>
              <th className="py-3 px-6 text-center">Phone</th>
              <th className="py-3 px-6 text-center">Address</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-600 text-sm font-light">
            {data?.map((user) => {
              const { name, email, mobileNumber, address, _id } = user;
              console.log(user.role);
              return (
                <tr
                  key={_id}
                  className="border-b  border-gray-200 hover:bg-white"
                >
                  <td className="py-3 px-2 font-semibold text-center border-x border-gray-200">
                    {" "}
                    {name}{" "}
                  </td>
                  <td className="py-3 px-2 font-semibold text-center border-x border-gray-200">
                    {" "}
                    {email}{" "}
                  </td>
                  <td className="py-3 px-2 font-semibold text-center border-x border-gray-200">
                    {" "}
                    {mobileNumber ? `${mobileNumber}` : "01312489164"}{" "}
                  </td>
                  <td className="py-3 px-2 font-semibold text-center uppercase border-x border-gray-200">
                    {" "}
                    {address ? `${address}` : "Dhaka"}{" "}
                  </td>
                  <td className="py-3 px-2 font-semibold text-center  border-x border-gray-200">
                    <div className=" flex items-center justify-center gap-x-8 ">
                      <button
                        title="Make Admin"
                        className="text-3xl font-bold hover:text-sky-600 "
                      >
                        {" "}
                        <FaUserCog />{" "}
                      </button>
                      <button
                        onClick={() => handleDeleteUser(_id)}
                        title="Delete User"
                        className="text-3xl font-bold hover:text-red-600 "
                      >
                        {" "}
                        <FaTrashAlt />{" "}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
