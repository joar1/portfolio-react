import { HashRouter, Routes, Route } from "react-router-dom";

import Hjem from "../pages/Hjem";
import OmMeg from "../pages/OmMeg";
import Prosjekter from "../pages/Prosjekter";

const PortRouter = () => {
   return(
      <HashRouter>
         <Routes>
            <Route path="Hjem" element={<Hjem/>}/>
            <Route path="OmMeg" element={<OmMeg/>}/>
            <Route path="Prosjekter" element={<Prosjekter/>}/>
         </Routes>
      </HashRouter>
   )
}

export default PortRouter;