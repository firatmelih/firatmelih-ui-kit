import {Route, Routes} from "react-router-dom";
import PHome from "../components/Page/PHome";

function Router (){
    return(
        <Routes>
            <Route path="/home" element={<PHome />} />
        </Routes>
    )
}

export default Router
