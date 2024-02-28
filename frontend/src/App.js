import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';

/* Pages and components */
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Background from './components/Background';
import BottomNavbar from './components/BottomNavbar';
import Navbar_new from './components/Navbar_new';
import Sidebar from './components/Sidebar';

function App() {
  useEffect(() => {
    document.title = "Audory";
  }, [])

  return (
    <div className="App font-['Poppins']">
      <BrowserRouter>
        <Background />
        <Navbar_new />
        <BottomNavbar />
        <Sidebar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
