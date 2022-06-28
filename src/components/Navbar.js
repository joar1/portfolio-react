import styled from "styled-components";

const Navbar = () =>{
   return (
      <PimpUl>
         <PimpLi className="nav-item" >Hjem</PimpLi>
         <PimpLi className="nav-item">Om Meg</PimpLi>
         <PimpLi className="nav-item">Prosjekter</PimpLi>
         <PimpLi className="nav-item">LinkedIn</PimpLi>
      </PimpUl>
   );
};

export default Navbar;


const PimpUl = styled.ul`
   margin: 0;
   padding: 0;
   overflow:hidden;
   background:#1C1C1C;
`

const PimpLi = styled.li`
   margin: 0;
   padding: 10px;
   display: block;
   float: left;
   text-decoration: none;
   font-size: 20px;
   font-weight: bolder;
   cursor: pointer;
`
