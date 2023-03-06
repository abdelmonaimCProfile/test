
import { Component } from 'react';
import Navbar from './header';

class AddPostAuthor extends Component{


    state = {
        CatNames: []
        };

        async componentDidMount() {
            const response = await fetch('http://localhost:8080/categories/names',
            {
                method:"Get",
                headers:{
                    "content-type":"application/json",
                },
            });

            const body = await response.json();
            this.setState({CatNames: body});
        }



        render() {
            const{CatNames}=this.state;
            return(
                <div>
                    <Navbar/>
                    <div class="bg-black p-10 text-xl font-serif mt-6 rounded w-3/5 mx-auto">
                    <h1 class=" text-orange-500 text-4xl text-center font-bold">Create Post</h1>
                        <div><label class="text-orange-500">Title</label><input type="text" id="title"  class="w-full h-12"/></div>
                        <div><label class="text-orange-500">Description</label><input type="text" id="description"  class="w-full h-12"/></div>
                        <div><label class="text-orange-500">Content</label><textarea type="text" id="content"  class="w-full" rows="10"/></div>
                        <div><label class="text-orange-500">Add Image</label><input type="file" id="title" class="w-full"/></div>
                        <div><label class="text-orange-500">Categories</label>

                            <select class="w-full h-8 text-black" >
                                <option>...</option>
                                {this.state.CatNames.map((e, key) => {
                                return <option key={key} value={e.categ_id}>{e.categ_name}</option>;
                                })}
                                </select>

                        </div>
                        <div ><label class="text-orange-500">Tags</label><input type="text" id="tags" class="w-full h-8" placeholder='#like,#insta(seperated by comma)'/></div>
                        <div ><button class="w-full h-8 bg-orange-500 rounded mt-4 text-black">Create</button></div>
                    </div>

                </div>
            )
        }
}

export default AddPostAuthor

