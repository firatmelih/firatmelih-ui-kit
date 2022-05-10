import {AText} from "../Atom";
import './TAbout.scss'
import {ReactComponent as Melih} from '../../assets/melih.svg'

function TAbout({myRef}) {

    return (
        <div ref={myRef} className={'t-about'}>
            <div className={'t-about__block'}>
                <div className={'t-about__title'}>
                    <AText  color={'black'} level='large'>
                   <span style={{fontWeight:'bold'}}>
                        I will help you create your personal website
                   </span>
                        . Work with engineers, in order to achieve safety, high performance and quality.
                    </AText>
                </div>
                <AText color={'black'} level={'large'}>
                    Who am I
                    <p  style={{fontWeight:'bold'}}>
                        the "engineer"
                    </p>
                </AText>
                <div className={'t-about__who-am-i'}>
                    <Melih/>
                    <AText color={'black'} level={'medium'}>Melih</AText>
                    <AText color={'black'} level={'medium'}><a rel={'noreferrer'} target={'_blank'} href={'https://github.com/firatmelih'}>@firatmelih</a></AText>
                </div>
            </div>
        </div>
    )
}

export default TAbout
