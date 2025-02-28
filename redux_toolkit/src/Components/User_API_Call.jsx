import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/userApiSlice";

const User_API_Call = () => {
  const dispatch = useDispatch();
  const { users = [], loading, error } = useSelector((state) => state.users || {});

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    console.log('users : ', users);
  }, [users]);

  return (
    <>
      <h2 className="text-center text-white underline text-2xl pb-2 bg-gray-900 text-white">User API Call</h2>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h2 className="text-2xl font-bold mb-4">Users List</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <table className="table-auto border-collapse border border-green-800">
            <thead className="bg-green-800 text-white">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Username</th>
                    <th>Company</th>
                    <th>website</th>
                </tr>
            </thead>
            <tbody className="bg-green-700 text-white">
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.username}</td>
                        <td>{user.company.name}</td>
                        <td>{user.website}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </>
  );
};

export default User_API_Call;
