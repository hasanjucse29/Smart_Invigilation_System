import './App.css';
import Home from "./Pages/Home";
import './Assets/CSS/Custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import GlobalNav from "./Components/GlobalNav";
import Login from "./Components/Login";
import LoginComponent from "./Components/LoginComponent";
import LoginComponent2 from "./Components/LoginComponent2";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import Profile2 from "./Components/Profile2"
import UpdateProfile from "./Components/UpdateProfile";
import ScrollPage from "./Components/ScrollPage";
import HomeTop from './Components/HomeTop';
import Popup from './Components/Popup';


function App() {
  return (

    <div> 
    
      <GlobalNav/>
    
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomeTop/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/ast' element={<LoginComponent/>}/>
      <Route path='/committee' element={<LoginComponent2/>}/>
      <Route path='/teacherprofile' element={<Profile/>}/>
      <Route path='/committeeprofile' element={<Profile2/>}/>
      <Route path='/manageinvigilation' element={<ScrollPage/>}/>
      <Route path='/updateprofile' element={<UpdateProfile/> }/>
     </Routes>
      {/*<Profile/>*/}
      {/*  <Profile2/>*/}
      {/*  <UpdateProfile/>*/}
    </BrowserRouter>

    </div>
   
   
  );
}

export default App;
