
import AddAuthor from './../../AuthorComponent/AddAuthor';
import LayoutAuthenticated from '../../Components/layout-auth';



function createAuthor(){
    return(
        <LayoutAuthenticated>
        <div>
                <div class="mx-auto w-2/5"><AddAuthor/></div>
        </div>
        </LayoutAuthenticated>
    )
}

export default createAuthor