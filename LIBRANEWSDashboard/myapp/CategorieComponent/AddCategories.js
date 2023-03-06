
import { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function AddCategories(){


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

        // ******************
        const [formData, setFormData] = useState({});
        const [file, setFile] = useState(null);
        const [responseMessage, setResponseMessage] = useState(null);

            function handleSubmit(event) {
            event.preventDefault();
            const form = new FormData();
                form.append('name', formData.name);
                form.append('description', formData.description);
                form.append('image', formData.image);
                form.append('categorie', formData.categorie);

            fetch('http://localhost:8080/categories', {
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
        // ******************



            return(

                    <div class="bg-black p-16 text-xl font-serif mt-6 w-full ">
                    <h1 class=" text-orange-500 text-4xl text-center font-bold">Create Categorie</h1>
                    <form onSubmit={handleSubmit}>
                        <div><label class="text-orange-500">Name</label><input type="text" name="name" onChange={handleInputChange}  class="w-full h-12"/></div>
                        <div><label class="text-orange-500">Description</label><input type="text" name="description" onChange={handleInputChange} class="w-full h-12"/></div>
                        <div><label class="text-orange-500">Add Image</label><input type="file" name="image" onChange={handleFileChange} class="w-full text-white"/>
                        {file && <img src={URL.createObjectURL(file)} alt="Profile" width={300} height={200} class='mt-5 mb-5'/>}
                        </div>

                        <div><label class="text-orange-500">Categories Parent</label>
                        {(!Loading && 
                            <select class="w-full h-8 text-black" name="categorie" onChange={handleInputChange}>
                                <option>...</option>
                                {categories.map((e, key) => {
                                return <option key={key} value={e.categ_id}>{e.categ_name}</option>;
                                })}
                                </select>
                        )}
                        </div>
                        <div ><button class="w-full h-8 bg-orange-500 rounded mt-4 text-black" type='submit'>Create</button></div>
                        </form>
                    </div>

            )

}

export default AddCategories

