
import LayoutAuthenticated from '../../../Components/layout-auth';
import frame from '/public/images/this.webp'
import Image  from 'next/image';



export default function Details(props){

    const Accepter=(post_id)=> {
        const confirmed = window.confirm("Are you sure you want to Accepter this Post?");

        if(confirmed){
        fetch(`http://localhost:8080/posts/Accepter/${post_id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((result) => {
        result.json().then((resp)=>{
            console.warn(resp);
        })
    });

    alert('Post Accepted successfully!');
    window.location.href = '/Dashboard/AllPosts';
}
}

const Refuser=(post_id)=> {
    const confirmed = window.confirm("Are you sure you want to Refuse this Post?");

        if(confirmed){
        fetch(`http://localhost:8080/posts/Refuser/${post_id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((result) => {
        result.json().then((resp)=>{
            console.warn(resp);
        })
    });

    alert('Post Refused successfully!');
    window.location.href = '/Dashboard/AllPosts';
    }
}
	return(
        <div>
            <LayoutAuthenticated>

                    <div class="lg:m-auto sm:justify-center">
                        <div class="lg:text-center space-y-8 lg:mx-24">

                            <div class="lg:mx-50 mt-8">
                                <h1 class="font-bold text-4xl lg:mx-36">{props.post.post_title}</h1>
                            </div>

                            <div class="lg:mx-36"><h3>{props.post.post_description}</h3></div>

                            <div class="m-auto">
                            <Image class="m-auto py-6 w-fit" src={frame} alt="img" width={600} height={600}/>
                            </div>


                            {/* PostContent */}
                            <div  class="text-center lg:mx-40">
                                <p id="content-copy">
                                    {props.post.post_content}
                                </p>
                            </div>

                            <div class='space-x-5'>
                                <button onClick={() => Accepter(props.post.post_id)} class="bg-orange-500 rounded p-3">Accepter</button>
                                <button onClick={() => Refuser(props.post.post_id)} class="bg-orange-500 rounded p-3">Refuser</button>
                                <a href={`/Dashboard/ModifierPost/${props.post.post_id}`} class="bg-orange-500 rounded p-3">Modifier</a>
                            </div>

                        </div>



                    </div>
                    </LayoutAuthenticated>
                </div>





	)
}


export async function getServerSideProps(context){
	const res = await fetch(`http://localhost:8080/posts/${context.params.id}`);
	const data = await res.json();


	return{
		props:{
			post:data
		}
	}
}


