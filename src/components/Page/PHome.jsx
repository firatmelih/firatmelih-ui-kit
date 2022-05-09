import './PHome.scss'
import TWelcomer from "../Template/TWelcomer";
import ONavigation from "../Organism/ONavigation/ONavigation";
function PHome(){

    return (<div className={'p-home'}>
        <ONavigation />
        <TWelcomer/>
    </div>)
}

export default PHome
