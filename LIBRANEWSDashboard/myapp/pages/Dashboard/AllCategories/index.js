
import LayoutAuthenticated from "../../../Components/layout-auth";

import AllCategories from './../../../CategorieComponent/AllCategories';




function AllCat(){



    return(
        <>
            <div>
                <LayoutAuthenticated>
                    <div class="mx-auto"><AllCategories/></div>
                </LayoutAuthenticated>
            </div>

        </>

    )
}

export default AllCat