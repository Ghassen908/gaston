import DarkModeToggle from './components/DarkModeToggle';
import MyAccountPage from './pages/Myaccount';
import Sginup from './components/Sginup';
import GalleryPage from './components/Gallery';
import SignInPage from './components/Signin';
import Album1 from './components/Album1';
import Dashboard from './components/Dashbord';
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
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
