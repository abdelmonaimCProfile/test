
import { useState , useEffect } from 'react';
import AddPostAuthor from './CreatePost';
import MyPosts from './MyPosts';

import test from "/public/images/this.webp"
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './header';




const AuthorDAshboard=()=>{

    const USER_API_BASE_URL="http://localhost:8080/posts";
    // const [ignored,forceUpdate]=useReducer(x=>x+1,0);
    const [posts ,setPosts]=useState(null);
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
                        },
                    });
                    const posts=await response.json();
                    setPosts(posts);
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
                <Navbar/>
                <div class="">
                {!Loading &&(
                        <div class="lg:grid grid-cols-3 space-x-5">
                                    {/* {authors && authors.length > 0 && authors.map(({author}) => */}
                                    {posts.map((post) =>
                                        <div class="bg-gray-100 border border-black md:border-none  p-4 text-sm ">
                                            <div><Image src={test} alt='image'/></div>
                                            <div class="">{post.post_title}</div>
                                            <div class="">{post.post_description}</div>
                                            <div class="">{post.post_excrept}</div>
                                            <div class="">
                                                <Link href={`/AuthorDashboard/${post.post_id}`} key={post.post_id} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded w-24">See post</Link>
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
export default AuthorDAshboard
