
import { Component } from 'react';
import Image from 'next/image';
import test from "../public/images/this.webp"
import Link from 'next/link';



class Private extends Component{

    state = {
        posts: [],
        };

        async  componentDidMount() {
            const response = await fetch('http://localhost:8080/posts/admin/private',
            
            {
                method:"Get",
                headers:{
                    "content-type":"application/json",
                    "Authorization": "Bearer " + Cookies.get("token")
                },
            });

            const body = await response.json();
            this.setState({posts: body});
        }
render() {
    const {posts} = this.state;
    return(
        <div>
            <div class="">
                        <div class="lg:grid grid-cols-3 space-x-5 space-y-5">
                                    {/* {posts && posts.length > 0 && posts.map(({post}) => */}
                                    {posts.map((post) =>
                                        <div class="bg-gray-100 border border-black md:border-none block p-4 text-sm" key={post.post_id}>
                                            <div><Image src={test} alt='image' /></div>
                                            <div class="">{post.post_title}</div>
                                            <div class="">{post.post_description}</div>
                                            <div class="">{post.post_excrept}</div>
                                            <div class="">
                                                <Link href={`/Dashboard/PrivatePost/${post.post_id}`} key={post.post_id} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded w-24">See post</Link>
                                                {/* <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                                <a href=''   class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded w-24">Edit</a>
                                                <button  class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded w-24">Delete</button> */}
                                            </div>
                                        </div>
                                        )}

                        </div>
                        {/* href={`/Dashboard/AllMembers/${author.user_id}`} */}
                    </div>
        </div>
    )
}
}
export default Private