import DarkModeToggle from './components/DarkModeToggle';
import MyAccountPage from './components/Myaccount';
import Sginup from './components/Sginup'
import GalleryPage from './components/Gallery';
import SignInPage from './components/signin';
import Album1 from './components/album1'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/signup" element={<Sginup />} />
        <Route path="/mypage" element={<MyAccountPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/album1" element={<Album1 />} />
      </Routes>
    </Router>
    
  );
}

export default App;
