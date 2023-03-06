import React from "react";
import {useNavigate} from "react-router-dom"

const User = ({ user, deleteUser }) => {
  const navigate = useNavigate();

    const editUser = (e, id) => {
      e.preventDefault();
      navigate(`/Dashboard/AllMembers/${author.user_id}`);
    };
  return (
    <tr key={user.id}>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_first_name}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_last_name}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_email_adresse}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_password}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_creation_date}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_birthday}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_city}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_country}3</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_phone_number}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_twitter}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_facebook}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_instagram}</td>
      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{user.user_linkedin}</td>
      <td className="text-right px-6 py-4 whitespace-nowrap">
        <button
          onClick={(e, id) => editUser(e, user.id)}
          class="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">
          Edit
        </button>
        <a
          onClick={(e, id) => deleteUser(e, user.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default User;
