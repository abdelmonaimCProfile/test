
import AddCategories from './../../CategorieComponent/AddCategories';
import LayoutAuthenticated from "../../Components/layout-auth";


function createCategories(){
    return(
        <LayoutAuthenticated>
        <div>
            <div class="mx-auto mt-36"><AddCategories/></div>
        </div>
        </LayoutAuthenticated>
    )
}

export default createCategories