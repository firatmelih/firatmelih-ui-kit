import {MenuItem, Select} from "@mui/material";
import './ASelect.scss'

function ASelect({options,color, handleOnChange, value}){
    let className = `a-select -${color ? color : 'primary'}`

    return(
        <Select
            value={value || "1"}
            onChange={handleOnChange}
            label="Age"
            className={className}
        >
            {
                options.map(option=>(
                    <MenuItem value={option.value}>{option.name}</MenuItem>
                ))
            }
        </Select>
    )
}
export default ASelect
