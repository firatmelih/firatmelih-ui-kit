import {AButton, AText} from "../Atom";
import {KeyboardArrowDown} from '@mui/icons-material'
import './TWelcomer.scss'
function TWelcomer({scrollToRef, myRef}){
    return(<div className={'t-welcome'}>
            <div className={'t-welcome__block'}>
                <div className={'t-welcome__text'}>
                    <AText color={'white'} level={'title-1'}>
                        <span>WELCOME</span>
                        <span>WELCOME</span>
                    </AText>
                    <AText level={'title-2'}>
                        Do you have a design?
                    </AText>
                </div>
                <AButton onClick={()=>{scrollToRef(myRef)}} circle type={'transparent'}><KeyboardArrowDown/></AButton>
            </div>
        </div>
    )
}
export default TWelcomer
