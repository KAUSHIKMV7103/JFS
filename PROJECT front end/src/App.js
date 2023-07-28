import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from './components/signup';
import Login from './components/login';
import SideBar from './pages/home';
import Home from './pages/front';
import Pricing from './pages/premium';

import Liked from './pages/liked';
import Playlist from './pages/playlist';
import AudioPlayer from './pages/music';
import FeedForm from './pages/FeedBack';
import Feedback from './pages/FeedBack';
import Adminlogin from './components/Admin/adminlogin';
import Dashboard from './components/Admin/Dashboard';
import Song from './components/Admin/Song';
import ViewFeedbacks from './components/Admin/viewfeedback';
function App() {
  return (
   <div>
   
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='sub' element={<SideBar/>}></Route>
      <Route path='home' element={<Home/>}></Route>
      <Route path='premium' element={<Pricing/>}></Route>
      <Route path='liked' element={<Liked/>}></Route>
      <Route path='playlist' element={<Playlist/>}></Route>
      <Route path='music' element={<AudioPlayer/>}></Route>
      <Route path='music10' element={<AudioPlayer/>}></Route>

    {/* <FeedForm/> */}
    <Route path='feedback' element={<Feedback/>}></Route>
    <Route path='/admin/login' element={<Adminlogin/>}></Route>
    <Route path='/admin/dashboard' element={<Dashboard/>}></Route>
    <Route path='/admin/song' element={<Song/>}></Route>
    <Route path='/admin/viewfeedback' element={<ViewFeedbacks/>}></Route>



    
       
    </Routes>

    

    </BrowserRouter>
  
  
    </div>
  );
}

export default App;
