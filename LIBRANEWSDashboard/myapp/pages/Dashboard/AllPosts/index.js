
import Navbar from "../../../Components/Navbar"
import SideBar from "../../../Components/SideBAr"
import LayoutAuthenticated from "../../../Components/layout-auth";
import AllPosts from './../../../PostComponent/ALLPosts';


function AllMembers(){



    return(
        <>
        <LayoutAuthenticated>
                <div><AllPosts/></div>
        </LayoutAuthenticated>

        </>

    )
}

export default AllMembers