import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";



 const Layout  =()=>{
    return(
       
      
        < >
        <Header/>
        <p className=" mt-40" ></p>
        <Outlet/>
        <Footer/>
        </>
        
    );
 };
 export default Layout;