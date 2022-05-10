import './OFooter.scss'
import {AText} from "../../Atom";
import {GitHub, LinkedIn, Twitter, WhatsApp, Mail, Call} from '@mui/icons-material'
function OFooter({myRef}){

    return(
        <div ref={myRef} className={'o-footer'}>
            <AText level={'large'}>Contact Me</AText>
            <div className={'o-footer__contact-area'}>
                <a rel={'noreferrer'} target={'_blank'} href={'tel:+4915207415371'}><Call fontSize={'large'}/></a>
                <a rel={'noreferrer'} target={'_blank'} href={'mailto:benmelihmail@gmail.com'}><Mail fontSize={'large'}/></a>
               <a  rel={'noreferrer'} target={'_blank'} href="https://wa.me/+4915207415371/?text=Hey%20Melih,%20I%20have%20an%20offer%20for%20you!"><WhatsApp fontSize={'large'}/></a>
            </div>

            <div className={'o-footer__socials'}>
                <ul>
                    <li><a   href={'/'}> <img src='/logo.png' alt={'logo'}/></a> </li>
                    <li><a rel={'noreferrer'} target={'_blank'} href={'https://github.com/firatmelih'}> <GitHub fontSize={'large'}/></a> </li>
                    <li><a rel={'noreferrer'} target={'_blank'}  href={'https://www.linkedin.com/in/firatmelih/'}> <LinkedIn fontSize={'large'}/></a></li>
                    <li><a rel={'noreferrer'} target={'_blank'} href={'https://twitter.com/firatmelihdev'}> <Twitter fontSize={'large'}/></a> </li>
                </ul>
            </div>
        </div>
    )
}
export default OFooter
