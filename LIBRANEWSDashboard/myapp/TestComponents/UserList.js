import { React, useState, useEffect } from "react";
import EditUser from "./EditUser";
import User from "./User";


const UserList = ({ user }) => {
  const USER_API_BASE_URL = "http://localhost:8080/users";
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [responseUser, setResponseUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [user, responseUser]);

  const deleteUser = (e, id) => {
    e.preventDefault();
    fetch(USER_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (users) {
        setUsers((prevElement) => {
          return prevElement.filter((user) => user.id !== id);
        });
      }
    });
  };



  return (
    <>
      <div className="container mx-auto my-8">
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
              <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">First Name</th>
                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Last Name</th>
                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Email </th>
                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Password</th>
                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Creation Date</th>
                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Birthday</th>
                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">City</th>
                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Country</th>
                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Phone Number</th>

                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Twitter Account</th>
                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Facebook Account</th>
                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Instagram Account</th>
                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">LinkeDin Account</th>
                  <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions </th>
              </tr>
            </thead>
            {!loading && (
              <tbody className="bg-white">
                {users?.map((user) => (
                  <User
                    user={user}
                    key={user.user_id}
                    deleteUser={deleteUser}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <EditUser userId={userId} setResponseUser={setResponseUser} />
    </>
  );
};

export default UserList;
