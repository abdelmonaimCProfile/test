
import LayoutAuthenticated from "../../Components/layout-auth";
import AddPost from './../../PostComponent/AddPost';


function CreatePost(){
    return(
        <LayoutAuthenticated>
        <div>
                    <div class="mx-auto w-3/5"><AddPost/></div>
        </div>
        </LayoutAuthenticated>
    )
}

export default CreatePost