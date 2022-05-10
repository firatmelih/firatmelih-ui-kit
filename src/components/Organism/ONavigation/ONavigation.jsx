import './ONavigation.scss'

function ONavigation({color}){
    let className = `o-navigation -${color?color:'primary'}`
    return(
        <div className={className}>
            <a href={'/'}> <img src='/logo.png' alt={'logo'}/> </a>
        </div>
    )
}
export default ONavigation
