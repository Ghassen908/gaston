import DarkModeToggle from './components/DarkModeToggle';
import MyAccountPage from './components/Myaccount';
import Sginup from './components/Sginup'
import GalleryPage from './components/Gallery';
import SignInPage from './components/signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/signup" element={<Sginup />} />
        <Route path="/mypage" element={<MyAccountPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
