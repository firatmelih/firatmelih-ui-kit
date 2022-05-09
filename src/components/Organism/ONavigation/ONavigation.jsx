import AInput from "../../Atom/AInput/AInput";
import './ONavigation.scss'
import {SearchRounded} from "@mui/icons-material";
import {AText} from '../../Atom'

function ONavigation({color}){
    let className = `o-navigation -${color?color:'primary'}`
    return(
        <div className={className}>
            <div className="o-navigation__logo">
                <AText level={'large'} color={'red'} bold> f </AText><AText
                level={'large'}  color={'blue'} bold> m </AText></div>
            <div>
                {/*//here will be a component by itself*/}
                <div className={'m-search'}>
                    <AInput placeHolder={'Search'} type={'name'} value={''}/>
                    <SearchRounded fontSize ={'large'}/>
                </div>
            </div>
        </div>
    )
}
export default ONavigation
