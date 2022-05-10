import AInput from "../../Atom/AInput/AInput";
import {SearchRounded} from "@mui/icons-material";
import './MSearch.scss'
function MSearch(){

    return(
        <div className={'m-search'}>
            <AInput placeHolder={'Search'} type={'name'} value={''}/>
            <SearchRounded fontSize ={'large'}/>
        </div>
    )
}
export default MSearch
