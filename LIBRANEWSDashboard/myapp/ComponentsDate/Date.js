
export default function DateTime(){

    var showdate = new Date();
    var displaytodaydate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    var dt = showdate.toDateString() ;
    return(
        <div>
            {dt}
        </div>
    )
}