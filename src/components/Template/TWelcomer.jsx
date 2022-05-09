import {AButton, AText} from "../Atom";
import AInput from "../Atom/AInput/AInput";
import ASelect from "../Atom/ASelect/ASelect";
import './TWelcomer.scss'
function TWelcomer(){
    return(<div className={'t-welcome'}>
            <AText  level={'title-1'}>
                Welcome to The New World!
            </AText>
            <AText  level={'title-2'}>
                Welcome to The New World!
            </AText>
            <AText level={'title-3'}>
                Welcome to The New World!
            </AText>
            <AText color={'yellow'} level={'large'}>
                Welcome to The New World!
            </AText>
            <AText color={'red'} level={'medium'}>
                Welcome to The New World!
            </AText>
            <AText color={'blue'}>
                Welcome to The New World!
            </AText>
            <AText color={'orange'} level={'small'}>
                Welcome to The New World!
            </AText>
            <AButton>Test</AButton>
            <br/>  <br/>
            <div>
                <AInput  type={'name'} value={'benmelih'}/>
                <br/>
                <br/>
                <AInput type={'password'} value={'123123'}/>
                <br/>  <br/>
                <ASelect handleOnChange={null} value={null} color={'warning'} options={[{value:'1',name:'Test'},{value:'2',name:'Melih'}]} />
            </div>
        </div>
    )
}
export default TWelcomer
