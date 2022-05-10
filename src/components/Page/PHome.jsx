import './PHome.scss'
import {useRef, useEffect, useState} from 'react'
import TWelcomer from "../Template/TWelcomer";
import TAbout from "../Template/TAbout";
import TBrands from "../Template/TBrands";
import OFooter from "../Organism/OFooter/OFooter";
import {AButton} from "../Atom";
import {KeyboardArrowUp} from "@mui/icons-material";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function PHome(){
    const myRef = useRef(null)

    const [scroll,setScroll] = useState(0)
    const executeScroll = () => scrollToRef(myRef)
    const listenToScroll = () => {
        setScroll(window.scrollY)
    }
    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll)
    },[])
    return (
        <div className={'p-home'}>
            <TWelcomer onClick={()=>{executeScroll()}} myRef={myRef} scrollToRef={scrollToRef} />
            <TAbout />
            <TBrands />
            <OFooter myRef={myRef}/>
            {scroll>200?<AButton onClick={()=>{window.scrollTo(0, 0)}} circle type={'transparent'} className={'go-back-btn'}><KeyboardArrowUp/></AButton>:null}
        </div>
    )
}

export default PHome
