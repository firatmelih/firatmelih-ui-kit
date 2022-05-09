import './AInput.scss'
import {useState} from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function AInput({type, value, color, onChange, placeHolder}) {
    let className = 'a-input'
    let childClassName = `${className}__${type} -${color ? color : 'primary'}`
    const [visible,setVisible] = useState(false)
    const toggleVisibility = ()=>(setVisible(!visible))

    return (<div className={className}>
            <input placeholder={placeHolder} onChange={onChange} className={childClassName} value={value} type={visible?'text':type}/>
            {type === 'password' ?
                (<div style={color!=='primary'?{color:'black'}:{}} className={'a-input__toggle'} onClick={toggleVisibility}>{visible?<VisibilityIcon/>:<VisibilityOffIcon/>}</div>) : null}
        </div>
    )
}

export default AInput
