import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser, selectAllUsers } from '../features/userEntitySlice';

const Normalization = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers) || []; // Fallback to empty array
    const { loading, error } = useSelector((state) => state.users) || {};

    const [newUser, setNewUser] = useState('');

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleAddUser = () => {
        if (newUser.trim() === '') {
            alert('User name cannot be empty');
            return;
        }
        dispatch(addUser({ id: Date.now(), name: newUser }));
        setNewUser('');
    };

    return (
        <div>
            <h2 className='text-2xl underline text-center mb-2'>State Normalization & EntityAdapter</h2>
            <ul>
                <li>By default, we store data in arrays, but updating or searching in large arrays is inefficient. Instead, we use normalization, which structures data like a dictionary (object with key-value pairs).</li>
                <li>Redux Toolkit provides createEntityAdapter() to automate state normalization. It automatically:
                    Normalizes data into entities, ids
                    Provides helper functions like addOne, updateOne, and removeOne
                    Makes fetching, updating, and deleting super fast
                </li>
            </ul>

            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
                <h2 className="text-3xl font-bold mb-4">Users with EntityAdapter</h2>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}

                <input
                    type="text"
                    value={newUser}
                    onChange={(e) => setNewUser(e.target.value)}
                    placeholder="Enter new user name"
                    className="mb-2 p-2 text-white bg-gray-800"
                />
                <button
                    onClick={handleAddUser}
                    className="bg-blue-500 p-2 mb-2"
                >
                    Add User
                </button>

                <ul className="bg-gray-800 p-4 rounded">
                    {users.map((user) => (
                        <li key={user.id} className="py-1 flex justify-between">
                            {user.name}
                            <button
                                onClick={() => dispatch(updateUser({ id: user.id, changes: { name: user.name + " (Updated)" } }))}
                                className="bg-yellow-500 p-1 mx-2"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => dispatch(deleteUser(user.id))}
                                className="bg-red-500 p-1"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Normalization;