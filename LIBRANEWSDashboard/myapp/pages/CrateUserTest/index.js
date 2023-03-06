import { useState } from 'react';
import { useEffect } from 'react';

function MyForm() {
    const [formData, setFormData] = useState({});
    const [file, setFile] = useState(null);
    const [responseMessage, setResponseMessage] = useState(null);

    function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData();
        form.append('fullName', formData.fullName);
        form.append('email', formData.email);
        form.append('password', formData.password);

        form.append('image', file);
        form.append('role', formData.role);

    fetch('http://localhost:8080/users', {
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

return (

    <div class="text-orange-500 space-y-10 bg-black rounded justify-center mt-11 p-14">
        <form onSubmit={handleSubmit} encType="multipart/form-data" class='space-y-10'>
            <table class="table-auto font-bold">
            <caption class='text-2xl font-bold mb-5'>Add a Member</caption>
            <tbody>
                <tr >
                    <td><label>First Name</label></td>
                    <td> <input type='text' name='fullName' onChange={handleInputChange}  placeholder="" class="rounded-xl w-full h-10 text-center " /></td>
                </tr>
                <tr>
                    <td><label>Email</label></td>
                    <td><input type='text' name='email' onChange={handleInputChange}  placeholder="" class="rounded-xl w-full h-10 text-center" /></td>
                </tr>
                <tr>
                    <td><label>Password</label></td>
                    <td><input type='password' name='password'  onChange={handleInputChange} placeholder="" class="rounded-xl w-full h-10 text-center"/></td>
                </tr>
                <tr>
                    <td><label>Picture</label></td>
                    {/* <td><input type='file' name='image' onChange={handleFileChange} class="rounded-xl w-full h-10 text-center" /></td> */}
                    <td>
                    <input type="file" name="user_profile_image" onChange={handleFileChange}/>
                    {file && <img src={URL.createObjectURL(file)} alt="Profile" width={200} height={200} class='mt-5 mb-5' property='img'/>}
                    </td>
                </tr>
                <tr>
                    <td><label>ROLE</label></td>
                    <td>
                        <select type='text' name='role' onChange={handleInputChange}  placeholder="" class="rounded-xl w-full h-10 text-center" >
                            <option>...</option>
                            <option>ROLE_ADMIN</option>
                            <option>ROLE_AUTHOR</option>
                        </select>
                    </td>
                </tr>
            </tbody>
            </table>
            <button id="submit" type="submit"  class="rounded-xl w-full h-10 bg-orange-600 text-white text-center hover:bg-orange-500">ADD</button>
        </form>
        {responseMessage ? <div>{responseMessage}</div> : null}
    </div>

    )
}

export default MyForm
