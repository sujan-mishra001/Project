import LoginPage from "./components/Loginpage.js";
import RegisterPage from "./components/Registerpage.js";
import Home from "./components/Home.js";
import HelpLine from "./components/HelpLine.js";
import Profile from "./components/Profile.js";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Blog from "./components/Blog.js";
import Layout from "./layouts/layout.js";
import Form from "./components/form.js";
import About from "./components/About.js";
import RForm from "./components/Form2.js";
import Bank from "./components/bank.js";
import Guide from "./components/Guide.js";
import AboutBlood from "./components/AboutBlood.js";
import Volunteer from "./components/Volunter.js";
import Eligibility from "./components/Eligibility.js";
import Repo from "./components/Repo.js";
import Campaigns from "./components/Campaigns.js";
import Notification from "./components/Notification.js";
function App(){
  return(
    <Router>
      <Routes>
        
      <Route index path="/" element={<LoginPage/>}/>
        <Route path ="/" element={<Layout/>}>

        
        <Route path ="/home" element={<Home/>}/>
        <Route path ="/form" element={<Form/>}/>
        <Route path="/rform" element={<RForm/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path ="/helpline" element={<HelpLine/>}/>
        <Route path ="/bank" element={<Bank/>}/>
        <Route path="/guide" element={<Guide/>}/>
        <Route path="/ablood" element ={<AboutBlood/>}/>
        <Route path="/volunteer" element ={<Volunteer/>}/>
        <Route path="/eligibility" element ={<Eligibility/>}/>
        <Route path="/repo" element={<Repo/>}/>
        <Route path="/campaigns" element ={<Campaigns/>}/>
        <Route path="/notification" element={<Notification/>}/>


        </Route>
        <Route path="/register" element={<RegisterPage/>}/>

       
      </Routes>

    </Router>
  );

}
export default App;