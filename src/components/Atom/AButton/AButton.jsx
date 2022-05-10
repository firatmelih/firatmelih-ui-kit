import './AButton.scss'
function AButton({onClick, type, disabled, circle, children, outlined, className}){
    let defaultClass = 'a-button'
    className ? defaultClass += ` ${className}` : defaultClass += ''
    type ? defaultClass += ` -${!outlined?type:''}` : defaultClass += ' -default'
    disabled ? defaultClass += ' -disabled' : defaultClass += ''
    outlined ? defaultClass += ` -outlined-${type ? type : 'default'}` : defaultClass += ''
    circle ? defaultClass += ` -circle` : defaultClass += ''

    return (
        <div className={defaultClass} onClick={onClick}>
            <p>{children}</p>
        </div>)

}

export default AButton
