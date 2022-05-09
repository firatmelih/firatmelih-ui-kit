import './AText.scss'
function AText({children, level, bold, color}){
    let className = 'a-text'
    className += ` -${level}`
    bold? className+=' -bold':className+=''
    color? className+=` -${color}`:className+=''
    if(level==='title-1'){
        return(
            <h1 className={className}>{children}</h1>
        )
    }
    else if(level==='title-2'){
        return(
            <h2 className={className}>{children}</h2>
        )
    }
    else if(level==='title-3'){
        return(
            <h3 className={className}>{children}</h3>
        )
    }
    else if(level==='title-4'){
        return(
            <h4 className={className}>{children}</h4>
        )
    }
    else{
        return(
            <p className={className}>{children}</p>
        )
    }
}

export default AText
