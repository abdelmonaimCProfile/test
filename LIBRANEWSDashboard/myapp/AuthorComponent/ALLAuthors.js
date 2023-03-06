
import { useState, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';




const AllAuthors=()=> {
    // state = {
    //     authors: [],
    //     };

    //     async componentDidMount() {
    //         const response = await fetch('http://localhost:8080/users/authors',
    //         {
    //             method:"Get",
    //             headers:{
    //                 "content-type":"application/json",
    //             },
    //         });

    //         const body = await response.json();
    //         this.setState({authors: body});
    //     }
        const USER_API_BASE_URL="http://localhost:8080/users/authors";
        const [ignored,forceUpdate]=useReducer(x=>x+1,0);
        const [authors ,setAuthors]=useState(null);
        const [Loading, setLoading]=useState(true);

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
                        });
                        const authors=await response.json();
                        setAuthors(authors);
                }
                catch(error){
                    console.log(error);
                }
                setLoading(false);
            };
            fetchData();
        },[ignored]);


        const remove=(user_id)=> {
            const confirmed = window.confirm("Are you sure you want to delete this Author?");

            if(confirmed){
                fetch(`http://localhost:8080/users/${user_id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer " + Cookies.get("token")
                    }
                }).then((result) => {
                    result.json().then((resp)=>{
                        console.warn(resp);

                    })
                    alert('Author deleted successfully!');
                    forceUpdate();
                });
            }
        }

        return(
            <>
            <div >

                    <div class="overflow-x-scroll">
                        <div class="">
                            <table class="min-w-full border block md:table mt-28 ">
                            <caption class="text-6xl text-bold m-4 text-left">Authors</caption>
                            <thead class="block md:table-header-group text-center">
                                <tr class="border border-black  block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative text-center">
                                <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">image</th>
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
                            {!Loading && (
                                <tbody class="block md:table-row-group">
                                    {/* {authors && authors.length > 0 && authors.map(({author}) => */}
                                    {authors.map((author) =>
                                        <tr class="bg-gray-100 border border-black md:border-none block md:table-row">
                                            <td>
                                            <img
                                                    src={`data:image/jpeg;base64,${author.user_profile_image}`}
                                                    alt="Author"
                                                    width="100"
                                                    height="100"
                                                />
                                            </td>

                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_first_name}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_last_name}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_email_adresse}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_password}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_creation_date}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_birthday}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_city}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_country}3</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_phone_number}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_twitter}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_facebook}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_instagram}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_linkedin}</td>
                                            <td class="p-2 md:border md:border-grey-500 text-left flex md:table-cell">
                                                <span class=" w-1/3 md:hidden font-bold flex">Actions</span>
                                                <div class="flex">
                                                    <a href={`/Dashboard/AllMembers/${author.user_id}`} key={author.user_id}  class="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class='h-9 w-10 p-1 bg-green-500 hover:bg-green-700 rounded' viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>
                                                    </a>
                                                    <button  onClick={() =>remove(author.user_id)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded w-10">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        )}
                                </tbody>
                            )}
                            </table>
                        </div>

                    </div>


                </div>
                </>
        )
    }

export default AllAuthors

// import { useState, useEffect, useReducer } from 'react';
// const AllAuthors=()=> {
//     // state = {
//     //     authors: [],
//     //     };
//     //     async componentDidMount() {
//     //         const response = await fetch('http://localhost:8080/users/authors',
//     //         {
//     //             method:"Get",
//     //             headers:{
//     //                 "content-type":"application/json",
//     //             },
//     //         });
//     //         const body = await response.json();
//     //         this.setState({authors: body});
//     //     }
//         const USER_API_BASE_URL="http://localhost:8080/users/authors";
//         const [ignored,forceUpdate]=useReducer(x=>x+1,0);
//         const [authors ,setAuthors]=useState(null);
//         const [Loading, setLoading]=useState(true);
//         useEffect(()=>{
//             const fetchData=async()=>{
//                 setLoading(true);
//                 try{
//                     const response=await fetch(USER_API_BASE_URL,
//                         {
//                             method:"Get",
//                             headers:{
//                                 "content-type":"application/json",
//                                 "Authorization": "Bearer " + Cookies.get("token")
//                             },
//                         });
//                         const authors=await response.json();
//                         setAuthors(authors);
//                 }
//                 catch(error){
//                     console.log(error);
//                 }
//                 setLoading(false);
//             };
//             fetchData();
//         },[ignored]);
//         const remove=(user_id)=> {
//             const confirmed = window.confirm("Are you sure you want to delete this Author?");
//             if(confirmed){
//                 fetch(`http://localhost:8080/users/${user_id}`, {
//                     method: 'DELETE',
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json'
//                     }
//                 }).then((result) => {
//                     result.json().then((resp)=>{
//                         console.warn(resp);
//                     })
//                     forceUpdate();
//                 });
//             }
//         }
//         return(
//             <>
//             <div >
//                     <div class="overflow-x-scroll">
//                         <div class="">
//                             <table class="min-w-full border block md:table mt-28 ">
//                             <caption class="text-6xl text-bold m-4 text-left">Authors</caption>
//                             <thead class="block md:table-header-group text-center">
//                                 <tr class="border border-black  block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative text-center">
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">First Name</th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Last Name</th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Email </th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Password</th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Creation Date</th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Birthday</th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">City</th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Country</th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Phone Number</th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Twitter Account</th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Facebook Account</th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Instagram Account</th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">LinkeDin Account</th>
//                                     <th class="bg-black p-2 text-orange-500 font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions </th>
//                                 </tr>
//                             </thead>
//                             {!Loading && (
//                                 <tbody class="block md:table-row-group">
//                                     {/* {authors && authors.length > 0 && authors.map(({author}) => */}
//                                     {authors.map((author) =>
//                                         <tr class="bg-gray-100 border border-black md:border-none block md:table-row">
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_first_name}</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_last_name}</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_email_adresse}</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_password}</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_creation_date}</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_birthday}</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_city}</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_country}3</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_phone_number}</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_twitter}</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_facebook}</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_instagram}</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{author.user_linkedin}</td>
//                                             <td class="p-2 md:border md:border-grey-500 text-left flex md:table-cell">
//                                                 <span class=" w-1/3 md:hidden font-bold flex">Actions</span>
//                                                 <div class="flex">
//                                                     <a href={`/Dashboard/AllMembers/${author.user_id}`}   key={author.user_id}  class="">
//                                                         <svg xmlns="http://www.w3.org/2000/svg" class='h-9 w-10 p-1 bg-green-500 hover:bg-green-700 rounded' viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>
//                                                     </a>
//                                                     <button  onClick={() =>remove(author.user_id)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded w-10">
//                                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                         )}
//                                 </tbody>
//                             )}
//                             </table>
//                         </div>

//                     </div>
//                 </div>
//                 </>
//         )
//     }
// export default AllAuthors