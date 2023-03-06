
import { Component, useEffect, useState } from 'react';

function AddPost() {


    const [categories ,setCategories]=useState(null);
	const [Loading, setLoading]=useState(true);

	useEffect(()=>{
		const fetchData=async()=>{
			setLoading(true);
			try{
				const response=await fetch("http://localhost:8080/categories/names",
					{
						method:"Get",
						headers:{
							"content-type":"application/json",
                            "Authorization": "Bearer " + Cookies.get("token")
						},
					});
					const categories=await response.json();
					setCategories(categories);
			}
			catch(error){
				console.log(error);
			}
			setLoading(false);
		};
		fetchData();
	},[]);
        // ******************
            const [formData, setFormData] = useState({});
            const [file, setFile] = useState(null);

            function handleSubmit(event) {
            event.preventDefault();
            const form = new FormData();  
                form.append('title', formData.title);
                form.append('description', formData.description);
                form.append('content', formData.content);
                form.append('image', formData.image);
                form.append('categorie', formData.categorie);
                form.append('tags', formData.tags);

            fetch('http://localhost:8080/post', {
                method: 'POST',
                body: form,
                headers: {
                    'Accept': 'multipart/form-data',
                }
                })
                .then(response => response.text())
                .then(message => setResponseMessage(message))
                .catch(error => console.error(error));
            }

            function handleInputChange(event) {
                setFormData({ ...formData, [event.target.name]: event.target.value });
            }

            function handleFileChange(event) {
                setFile(event.target.files[0]);
            }
            useEffect(() => {
                console.log(file);
            }, [file]);
        // *************************


            return(

                    <div class="bg-black p-10 text-xl font-serif mt-6 w-full">
                    <h1 class=" text-orange-500 text-4xl text-center font-bold">Create Post</h1>
                    <form onSubmit={handleSubmit}>
                        <div><label class="text-orange-500">Title</label><input type="text" name="title"  class="w-full h-12" onChange={handleInputChange}/></div>
                        <div><label class="text-orange-500">Description</label><input type="text" name="description"  class="w-full h-12" onChange={handleInputChange}/></div>
                        <div><label class="text-orange-500">Content</label><textarea type="text" name="content"  class="w-full" rows="10" onChange={handleInputChange}/></div>
                        <div><label class="text-orange-500">Add Image</label>
                        <input type="file" name="user_profile_image" onChange={handleFileChange} class='text-white'/>
                        {file && <img src={URL.createObjectURL(file)} alt="Profile" width={300} height={200} class='mt-5 mb-5'/>}
                        </div>
                        <div><label class="text-orange-500">Categories</label>
									{!Loading && (
										<div>
											<select class="w-full h-8 text-black">
												<option  name="categories"  onChange={handleInputChange} required></option>
												{categories?.map((e,key)=>(
														<option key={key} value={e.categ_id}>{e.categ_name}</option>
												))}
												</select>
										</div>
									)}
                                </div>
                        <div ><label class="text-orange-500">Tags</label><input type="text" name="tags" class="w-full h-8" placeholder='#like,(Separated by comma)' onChange={handleInputChange}/></div>
                        <div ><button class="w-full h-8 bg-orange-500 rounded mt-4 text-black" type='submit'>Create</button></div>
                        </form>
                    </div>

            )
        }


export default AddPost
