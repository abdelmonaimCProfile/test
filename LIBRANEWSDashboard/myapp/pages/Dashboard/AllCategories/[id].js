import Navbar from "../../../Components/Navbar";
import SideBar from "../../../Components/SideBAr";
import { useState, useEffect } from 'react';
import LayoutAuthenticated from "../../../Components/layout-auth";
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';





function updateUser ({categories}) {


	const [categ_name, setName] = useState(categories.categ_name);
	const [categ_description, setDescription] = useState(categories.cated_description);
	const [categ_image, setImage] = useState(categories.categ_image);

		const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedAuthor =
		{
			categ_name,
			categ_description,
			categ_image,
	    };

		try {
			const response = await fetch(`http://localhost:8080/categories/${categories.user_id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'multipart/form-data'
			},
			body: JSON.stringify(updatedAuthor)
			});
			const data = await response.json();
			console.log(data);
			alert('updated') // updated user data
		} catch (error) {
			console.error(error);
		}
		}

		const handleNameChange = (e) => {
		setName(e.target.value);
		}
		const handleDescriptionChange = (e) => {
			setDescription(e.target.value);
		}
		const handleImageChange = (e) => {
			setImage(e.target.value);
		}

    return(

			<div>
				<LayoutAuthenticated>
					<div class="text-orange-500 bg-black w-full h-fit p-10 mx-80 mt-24">
                        <form onSubmit={handleSubmit}>
						<table class="font-bold m-auto space-x-10 space-y-10">
							<caption class='text-2xl font-bold mb-5'>Update Informations</caption>
							<tbody class="space-y-10" >
								<tr class="space-x-14">
									<td class="w-72"><label >Name</label></td>
									<td> <input type='text' name='categ_name' value={categ_name} onChange={handleNameChange}  placeholder="" class="rounded-xl w-96 h-10 text-center " /></td>
								</tr>
								<tr>
									<td><label>Description</label></td>
									<td><input type='text' name='categ_description'  value={categ_description} onChange={handleDescriptionChange}  placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
								</tr>
								<tr>
									<td><label>Picture</label></td>
									<td><input type='text' name='user_profile_image' value={user_profile_image} onChange={handleImageChange}  class="rounded-xl w-full h-10 text-center" /></td>
                                    {/* <div><label class="text-orange-500">Add Image</label>
                                        <input type="file" name="user_profile_image" onChange={handleImageChange} class='text-white'/>
                                        {image && <img src={URL.createObjectURL(file)} alt="Profile" width={300} height={200} class='mt-5 mb-5'/>}
                                        </div> */}
								</tr>
								<tr>
									<td><label></label></td>
									<td><button id="submit" type="submit"  class="rounded-xl w-96 justify-items-center h-10 bg-orange-600 text-white text-center hover:bg-orange-500" >Update</button>
                                    </td>
								</tr>
							</tbody>
						</table>
                        </form>
					</div>
					</LayoutAuthenticated>
				</div>

    )
}
export default updateUser

export async function getServerSideProps(context){
	const res = await fetch(`http://localhost:8080/categories/${context.params.id}`);
	const data = await res.json();


	return{
		props:{
			categories:data
		}
	}
}