// import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = () =>{
   return (
      <>
      <nav className="navbar">
         <div className="hjem">Hjem</div>
         <ul className="nav-links">
            <Link to="OmMeg">Om Meg</Link>
            <Link to="Linkedin">LinkedIn</Link>
            <Link to="Prosjekter">Prosjekter</Link>
         </ul>
      </nav>
      </>
   );
};

// const PimpNav = styled.nav`
//    margin: 0;
//    padding: 0;
//    background:#1C1C1C;
//    display: flex;
//    justify-content: space-between;
//    align-items: stretch;
// `
// const PimpUl = styled.ul`
//    margin: 0;
//    padding: 0;
// `
// const PimpLi = styled.li`
//    margin: 0;
//    padding: 10px 12px 10px 0px;
//    display: block;
//    float: left;
//    font-size: 20px;
//    font-weight: bolder;
//    cursor: pointer;
// `
// const BigA = styled.a`
//    font-size: 2rem;
//    padding-left:15px;
// `
// const PimpA = styled.a`
//    align-items: center;
//    color: blanchedalmond;
//    text-decoration: none;
//    align-items: center;
//    &:hover{
//       color:gold;
//    }
// `
