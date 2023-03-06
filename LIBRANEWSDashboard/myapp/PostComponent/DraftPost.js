
import { Component, useState, useEffect } from 'react';
import Image from 'next/image';
import test from "../public/images/this.webp"
import Link from 'next/link';



const Draft=()=>{

    const USER_API_BASE_URL="http://localhost:8080/posts/admin/draft";
    // const [ignored,forceUpdate]=useReducer(x=>x+1,0);
    const [drafts ,setDrafts]=useState(null);
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
                    const drafts=await response.json();
                    setDrafts(drafts);
            }
            catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    },[]);


    return(
        <div>
            <div class="">
                {!Loading &&(
                        <div class="lg:grid grid-cols-3 space-x-5">
                                    {/* {authors && authors.length > 0 && authors.map(({author}) => */}
                                    {drafts.map((draft) =>
                                        <div class="bg-gray-100 border border-black md:border-none  p-4 text-sm ">
                                            <div><Image src={test} alt='image'/></div>
                                            <div class="">{draft.post_title}</div>
                                            <div class="">{draft.post_description}</div>
                                            <div class="">{draft.post_excrept}</div>
                                            <div class="">
                                                <Link href={`/Dashboard/DraftPost/${draft.post_id}`} key={draft.post_id} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded w-24">See post</Link>
                                                {/* <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <a href=''   class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded w-24">Edit</a>
                                                <button  class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded w-24">Delete</button> */}
                                            </div>
                                        </div>
                                        )}

                        </div>
                )}
            </div>
        </div>
    )
}

export default Draft
