import Navbar from "../../../Components/Navbar";
import SideBar from "../../../Components/SideBAr";
import { useState, useEffect } from 'react';
import LayoutAuthenticated from "../../../Components/layout-auth";
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';





function updateUser ({author}) {


	const [user_first_name, setName] = useState(author.user_first_name);
	const [user_last_name, setLastName] = useState(author.user_last_name);
	const [user_email_adresse, setAdresse] = useState(author.user_email_adresse);
	const [user_password, setPassword] = useState(author.user_password);
	const [user_birthday, setBirthday] = useState(author.user_birthday);
	const [user_city, setCity] = useState(author.user_city);
	const [user_country, setCountry] = useState(author.user_country);
	const [user_phone_number, setPhone] = useState(author.user_phone_number);
	const [user_profile_image, setImage] = useState(author.user_profile_image);
	const [user_twitter, setTwitter] = useState(author.user_twitter);
	const [user_facebook, setFacebook] = useState(author.user_facebook);
	const [user_instagram, setInstagram] = useState(author.user_instagram);
	const [user_linkedin, setLinkedin] = useState(author.user_linkedin);

		const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedAuthor =
		{
			user_first_name,
			user_last_name,
			user_email_adresse,
			user_password,
			user_birthday,
			user_city,
			user_country,
			user_phone_number,
			user_profile_image,
			user_twitter,
			user_facebook,
			user_instagram,
			user_linkedin
	    };

		try {
			const response = await fetch(`http://localhost:8080/users/${author.user_id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'multipart/form-data',
				"Authorization": "Bearer " + Cookies.get("token")
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
		const handleLastNameChange = (e) => {
			setLastName(e.target.value);
		}
		const handleEmailChange = (e) => {
			setAdresse(e.target.value);
			}
		const handlePasswordChange = (e) => {
			setPassword(e.target.value);
		}
		const handleBirthdayChange = (e) => {
			setBirthday(e.target.value);
			}
		const handleCityChange = (e) => {
			setCity(e.target.value);
		}
		const handleCountryChange = (e) => {
			setCountry(e.target.value);
			}
		const handlePhoneChange = (e) => {
			setPhone(e.target.value);
		}
		const handleImageChange = (e) => {
			setImage(e.target.value);
		}
		const handleTwitterChange = (e) => {
			setTwitter(e.target.value);
			}
		const handleFacebookChange = (e) => {
			setFacebook(e.target.value);
		}
		const handleInstagramChange = (e) => {
			setInstagram(e.target.value);
			}
		const handleLinkeDinChange = (e) => {
			setLinkedin(e.target.value);
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
									<td class="w-72"><label >First Name</label></td>
									<td> <input type='text' name='user_first_name' value={user_first_name} onChange={handleNameChange}  placeholder="" class="rounded-xl w-96 h-10 text-center " /></td>
								</tr>
								<tr>
									<td><label>Last Name</label></td>
									<td><input type='text' name='user_last_name'  value={user_last_name} onChange={handleLastNameChange}  placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
								</tr>
								<tr>
									<td><label>Email</label></td>
									<td><input type='text' name='user_email_adresse'  value={user_email_adresse} onChange={handleEmailChange}  placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
								</tr>
								<tr>
									<td><label>Password</label></td>
									<td><input type='string' name='user_password'  value={user_password} onChange={handlePasswordChange}  placeholder="" class="rounded-xl w-full h-10 text-center"/></td>
								</tr>
								<tr>
									<td><label>Birthday</label></td>
									<td><input type='string' name='user_birthday'  value={user_birthday} onChange={handleBirthdayChange}  placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
								</tr>
								<tr>
									<td><label>City</label></td>
									<td><input type='text' name='user_city'  value={user_city} onChange={handleCityChange}  placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
								</tr>
								<tr>
									<td><label>Country</label></td>
									<td><input type='text' name='user_country'  value={user_country} onChange={handleCountryChange} placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
								</tr>
								<tr>
									<td><label>Phone Number</label></td>
									<td><input type='text' name='user_phone_number'  value={user_phone_number} onChange={handlePhoneChange}  placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
								</tr>
								<tr>
									<td><label>Picture</label></td>
									<td><input type='file' name='user_profile_image'  onChange={handleImageChange}  class="rounded-xl w-full h-10 text-center" /></td>
									{user_profile_image && <img src={URL.createObjectURL(user_profile_image)} alt="Profile" width={200} height={200} class='mt-5 mb-5' property='img'/>}
								</tr>
								<tr>
									<td class="mr-9"><label>Twitter Account</label></td>
									<td><input type='text' name='user_twitter'  value={user_twitter} onChange={handleTwitterChange}   placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
								</tr>
								<tr>
									<td><label>Facebook Account</label></td>
									<td><input type='text' name='user_facebook'  value={user_facebook} onChange={handleFacebookChange}  placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
								</tr>
								<tr>
									<td><label>Instagram Account</label></td>
									<td><input type='text' name='user_instagram'  value={user_instagram} onChange={handleInstagramChange}   placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
								</tr>
								<tr>
									<td><label>LinkDin Account</label></td>
									<td><input type='text' name='user_linkedin'  value={user_linkedin} onChange={handleLinkeDinChange} placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
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
	const res = await fetch(`http://localhost:8080/users/user/${context.params.id}`);
	const data = await res.json();



	return{
		props:{
			author:data
		}
	}
}