import { Dialog, Transition } from "@headlessui/react";
import { React, useState, useEffect, Fragment } from "react";

const EditUser = ({ userId, setResponseUser }) => {
  const USER_API_BASE_URL = "http://localhost:8080/users";

  const [isOpen, setIsOpen] = useState(false);
  const [author, setAuthor] = useState({
    id:"",
    firstName:"",
    lastName:"",
    emailId:"",
    password:"",
    birthday:"",
    city:"",
    country:"",
    phone:"",
    twitter:"",
    facebook:"",
    instagram:"",
    linkDin:"",
    role:"",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const _user = await response.json();
        setAuthor(_user);
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (userId) {
      fetchData();
    }
  }, [userId]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setAuthor({ ...author, [event.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();

  };

  const updateUser = async (e) => {
    e.preventDefault();
    const response = await fetch(USER_API_BASE_URL + "/" + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(author),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _user = await response.json();
    setResponseUser(_user);
    reset(e);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900">
                Update User
              </Dialog.Title>
              <div className="flex max-w-md max-auto">
                <div className="py-2">
                    <tbody class="space-y-10" >
                    <tr class="space-x-14">
                      <td class="w-72"><label >First Name</label></td>
                      <td> <input type='text' name='firstName'  value={author.firstName} onChange={(e)=>handleChange(e)}   placeholder="" class="rounded-xl w-96 h-10 text-center " /></td>
                    </tr>
                    <tr>
                      <td><label>Last Name</label></td>
                      <td><input type='text' name='lastName' value={author.lastName} onChange={(e)=>handleChange(e)}  placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
                    </tr>
                    <tr>
                      <td><label>Email</label></td>
                      <td><input type='text' name='emailId' value={author.emailId} onChange={(e)=>handleChange(e)} placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
                    </tr>
                    <tr>
                      <td><label>Password</label></td>
                      <td><input type='password' name='password' value={author.password} onChange={(e)=>handleChange(e)} placeholder="" class="rounded-xl w-full h-10 text-center"/></td>
                    </tr>
                    <tr>
                      <td><label>Birthday</label></td>
                      <td><input type='string' name='birthday' value={author.birthday} onChange={(e)=>handleChange(e)} placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
                    </tr>
                    <tr>
                      <td><label>City</label></td>
                      <td><input type='text' name='city' value={author.city} onChange={(e)=>handleChange(e)} placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
                    </tr>
                    <tr>
                      <td><label>Country</label></td>
                      <td><input type='text' name='country' value={author.country} onChange={(e)=>handleChange(e)} placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
                    </tr>
                    <tr>
                      <td><label>Phone Number</label></td>
                      <td><input type='text' name='phone' value={author.phone_number} onChange={(e)=>handleChange(e)} placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
                    </tr>
                    {/* <tr>
                      <td><label>Picture</label></td>
                      <td><input type='file' name='image' value={author.image}   class="rounded-xl w-full h-10 text-center" /></td>
                    </tr> */}
                    <tr>
                      <td class="mr-9"><label>Twitter Account</label></td>
                      <td><input type='text' name='twitter' value={author.twitter} onChange={(e)=>handleChange(e)}  placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
                    </tr>
                    <tr>
                      <td><label>Facebook Account</label></td>
                      <td><input type='text' name='facebook'value={author.facebook} onChange={(e)=>handleChange(e)} placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
                    </tr>
                    <tr>
                      <td><label>Instagram Account</label></td>
                      <td><input type='text' name='instagram' value={author.instagram} onChange={(e)=>handleChange(e)} placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
                    </tr>
                    <tr>
                      <td><label>LinkDin Account</label></td>
                      <td><input type='text' name='linkDin' value={author.linkDin} onChange={(e)=>handleChange(e)}  placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
                    </tr>
                    {/* <tr>
                      <td><label>ROLE</label></td>
                      <td>
                        <select type='text' name='role' value={author.user_role}  placeholder="" class="rounded-xl w-full h-10 text-center" >
                          <option>...</option>
                          <option>ROLE_ADMIN</option>
                          <option>ROLE_AUTHOR</option>
                        </select>
                      </td>
                    </tr> */}
                  </tbody>
                  <div className="h-14 my-4 space-x-4 pt-4">
                    <button
                      onClick={updateUser}
                      className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                      Update
                    </button>
                    <button
                      onClick={reset}
                      className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditUser;
