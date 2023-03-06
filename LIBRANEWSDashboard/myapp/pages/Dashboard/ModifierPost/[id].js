import Navbar from "../../../Components/Navbar";
import SideBar from "../../../Components/SideBAr";
import { useState, useEffect } from 'react';


const updatePost =({post})=> {


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
	// ************************

	// *****************************

	const [title, setTitle] = useState(post.post_title);
	const [description, setDescription] = useState(post.post_description);
	const [content, setContent] = useState(post.post_content);
	const [image, setImage] = useState(post.post_image);
	const [categoriesM, setCategoriesM] = useState(post.categorie_name);
	//const [tags, setTags] = useState(post.tags || []);
	const [tags, setTags] = useState(post.tags.map(tag => tag.tag_name))


		const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedPost =
		{
			title,
			description,
			content,
			image,
			categoriesM,
			tags

		};

		try {
			const response = await fetch(`http://localhost:8080/posts/${post.post_id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(updatedPost)
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
		}

		const handleTitleChange = (e) => {
		setTitle(e.target.value);
		}
		const handleDescriptionChange = (e) => {
			setDescription(e.target.value);
		}
		const handleContentChange = (e) => {
			setContent(e.target.value);
			}
		const handleImageChange = (e) => {
			setImage(e.target.value);
		}
		const handleCategoriesChange = (e) => {
			setCategoriesM(e.target.value);
			}
		const handleTagsChange = (e) => {
			setTags(e.target.value.split(',').map((tag) => tag.trim()));
		}
		console.log(tags)

    return(

			<div>
				<Navbar/>
				<div class="flex">
					<div><SideBar/></div>
					<div class="text-orange-500 bg-black w-full h-fit mb-10 p-5 mx-80 mt-9">
                        <form onSubmit={handleSubmit}>
                            <div class="bg-black p-10 text-xl font-serif w-full">
                            <h1 class=" text-orange-500 text-4xl text-center font-bold">Update Post</h1>
                                <div><label class="text-orange-500">Title</label><input type="text" name="title" value={title} onChange={handleTitleChange}  class="w-full h-12"/></div>
                                <div><label class="text-orange-500">Description</label><input type="text" value={description} onChange={handleDescriptionChange} name="description"  class="w-full h-12"/></div>
                                <div><label class="text-orange-500">Content</label><textarea type="text" value={content} onChange={handleContentChange} name="content"  class="w-full" rows="10"/></div>
                                <div><label class="text-orange-500">Image</label><input type='file' name='image'  onChange={handleImageChange}  class="rounded-xl w-full h-10 text-center" /></div>
								{/* <div><label class="text-orange-500">Add Image</label>
								<input type="file" name="user_profile_image" onChange={handleImageChange} class='text-white'/>
								{image && <img src={URL.createObjectURL(file)} alt="Profile" width={300} height={200} class='mt-5 mb-5'/>}
								</div> */}
                                <div><label class="text-orange-500">Categories</label>
									{!Loading && (
										<div>
											<select class="w-full h-8 text-black"  >
												<option  name="categoriesM"  onChange={handleCategoriesChange}>{categoriesM}</option>
												{categories?.map((e,key)=>(
														<option key={key} value={e.categ_id}>{e.categ_name}</option>
												))}
												</select>
										</div>
									)}
                                </div>

                                <div ><label class="text-orange-500">Tags</label><input type="text" name="tags" value={tags.join(', ')} onChange={handleTagsChange} class="w-full h-8"/></div>
                                <div ><button class="w-full h-8 bg-orange-500 rounded mt-4 text-black">Update</button></div>
                            </div>
                        </form>
					</div>
				</div>
			</div>

    )

}
export default updatePost

export async function getServerSideProps(context){
	const res = await fetch(`http://localhost:8080/posts/${context.params.id}`);
	const data = await res.json();


	return{
		props:{
			post:data
		}
	}
}