import { BigA, PimpNav, PimpLink, PimpA } from "./Styles/Navstyle";

export const Nav = () =>{
   return (
      <PimpNav>
         <PimpLink to="Hjem"><BigA>Hjem</BigA></PimpLink>
         <PimpLink to="OmMeg">Om Meg</PimpLink>
         <PimpA href="https://www.linkedin.com/in/joar-reinsnes-938577169/" target="_blank" rel="noreferrer">LinkedIn</PimpA>
         <PimpA href="https://github.com/joar1?tab=repositories" target="_blank" rel="noreferrer" >Prosjekter</PimpA>
      </PimpNav>
   );
};