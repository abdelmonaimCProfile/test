import Draft from "./DraftPost";
import Private from "./PrivatePost";
import Publish from "./PublicPost";
import { useState } from 'react';




function AllPosts(){

const AllPosts=["Draft","Publish","Private"];

const [MyAllPost,setAllPosts]=useState('');



    return(
            <div class="lg:p-10 text-center font-bold text-4xl space-y-7 ">
                <h1 class="text-left font-bold text-5xl italic">Posts</h1>

                    {AllPosts.map((post) =>
                    <div class='lg:p-6 bg-orange-400 hover:bg-orange-500 h-28 rounded shadow-lg mb-7'>
                        <button  key={post} class='italic' onClick={()=>setAllPosts(post)}>{post}</button>
                    </div>
                    )}

                <div>
                    <div class="w-fit">
                        {MyAllPost==="Draft" &&(<Draft/>)}
                    </div>
                    <div class="w-fit">
                        {MyAllPost==="Private" &&(<Private/>)}
                    </div>
                    <div class="w-fit">
                        {MyAllPost==="Publish" &&(<Publish/>)}
                    </div>
                </div>
            </div>

    )
}

export default AllPosts