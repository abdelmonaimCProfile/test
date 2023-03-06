
import { Component, useState, useEffect, useReducer, Fragment } from 'react';
import LayoutAuthenticated from './../../Components/layout-auth';




const AllAuthors=()=> {

        const USER_API_BASE_URL="http://localhost:8080/users/all";
        const [ignored,forceUpdate]=useReducer(x=>x+1,0);
        const [authors ,setAuthors]=useState(null);
        const [Loading, setLoading]=useState(true);

        console.log(authors)

        useEffect(()=>{
            const fetchData=async()=>{
                setLoading(true);
                try{
                    const response=await fetch(USER_API_BASE_URL,
                        {
                            method:"Get",
                            headers:{
                                "content-type":"application/json",
                                "Authorization": "Bearer " + Cookies.get("token")
                            },

                            responseType: "LONGBLOB",
                        });
                        const authors=await response.json();
                        setAuthors(
                            authors.map((author) => {
                                const imageBlob = new Blob([author.image], { type: 'image/jpeg' });
                                const reader = new FileReader();
                                reader.readAsDataURL(imageBlob);
                                reader.onloadend = () => {
                                author.image = reader.result;
                                };
                                return author;
                            })
                        );
                }
                catch(error){
                    console.log(error);
                }
                setLoading(false);
            };
            fetchData();
        },[ignored]);


        const remove=(id)=> {

            fetch(`http://localhost:8080/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((result) => {
                result.json().then((resp)=>{
                    console.warn(resp);
                })

                forceUpdate();
            });
        }

        return(

            <div >

                    <div class="overflow-x-scroll">
                        <div class="">
                            <table class="min-w-full border block md:table mt-28 ">
                            <caption class="text-6xl text-bold m-4 text-left">Authors</caption>
                            <thead class="block md:table-header-group text-center">
                                <tr class="border border-black  block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative text-center">
                                    <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">First Name</th>
                                    <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Last Name</th>
                                    <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Email </th>
                                    <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Password</th>
                                    <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Creation Date</th>

                                </tr>
                            </thead>
                            {!Loading && (
                                <tbody class="block md:table-row-group">
                                    {/* {authors && authors.length > 0 && authors.map(({author}) => */}
                                    {authors.map((author) =>
                                        <tr class="bg-gray-100 border border-black md:border-none block md:table-row">
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.fullName}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.email}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.password}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.role}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                            <img
                                                    src={`data:image/jpeg;base64,${author.image}`}
                                                    alt="Author"
                                                    width="100"
                                                    height="100"
                                                />
                                            </td>

                                        </tr>
                                        )}
                                </tbody>
                            )}
                            </table>
                        </div>
                        {/* href={`/Dashboard/AllMembers/${author.user_id}`} */}
                    </div>


                </div>


        )
    }

export default AllAuthors