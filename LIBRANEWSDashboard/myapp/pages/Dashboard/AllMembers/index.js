import Navbar from "../../../Components/Navbar";
import SideBar from "../../../Components/SideBAr"
import AllAuthors from '../../../AuthorComponent/ALLAuthors';




function AllMembers(){



    return(
        <>
            <div>
                <Navbar/>
                <div class="flex">
                    <div><SideBar/></div>
                    <div class="overflow-x-scroll"><AllAuthors/></div>
                </div>
            </div>

        </>

    )
}

export default AllMembers