import { Link } from "react-router-dom";
import { BigA, PimpNav } from "./Styles/Navstyle";

export const Nav = () =>{
   return (
      <PimpNav>
         <Link to="Hjem"><BigA>Hjem</BigA></Link>
         <Link to="OmMeg">Om Meg</Link>
         <Link href="https://www.linkedin.com/in/joar-reinsnes-938577169/" target="_blank">LinkedIn</Link>
         <Link href="https://github.com/joar1?tab=repositories" target="_blank" >Prosjekter</Link>
      </PimpNav>
   );
};