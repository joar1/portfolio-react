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
   display: flex;
   justify-content: space-between;
   align-items: center;
   list-style-type: none;
   background-color: black;
   margin-top: 0;
   padding: 10px;
`

const PimpLi = styled.li`
   display: flex;
`
