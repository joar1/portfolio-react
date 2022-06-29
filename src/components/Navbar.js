import styled from "styled-components";

const Navbar = () =>{
   return (
      <>
      <PimpNav>
         <PimpA href="#"><BigA>Hjem</BigA></PimpA>
         <PimpUl>
            <PimpLi className="nav-item"><PimpA href="#">Om Meg</PimpA></PimpLi>
            <PimpLi className="nav-item"><PimpA href="#">Prosjekter</PimpA></PimpLi>
            <PimpLi className="nav-item"><PimpA href="#">LinkedIn</PimpA></PimpLi>
         </PimpUl>
      </PimpNav>
      </>
   );
};

export default Navbar;


const PimpNav = styled.nav`
   margin: 0;
   padding: 0;
   background:#1C1C1C;
   display: flex;
   justify-content: space-between;
`

const PimpUl = styled.ul`
   margin: 0;
   padding: 0;
`

const PimpLi = styled.li`
   margin: 0;
   padding: 10px 12px 10px 0px;
   display: block;
   float: left;
   font-size: 20px;
   font-weight: bolder;
   cursor: pointer;
`
const BigA = styled.a`
   font-size: 2rem;
   padding-left:15px;
`

const PimpA = styled.a`
   align-items: center;
   color: blanchedalmond;
   text-decoration: none;
   &:hover{
      color:gold;
   }
`
