import HomePage from './pages/HomePage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import { BrowserRouter as Router , Route , Routes ,Link } from 'react-router';
import SignUpPage from './pages/SignUpPage.jsx';
const App = () => {
  return (
    <>
    <Router>
      <div className=' flex justify-evenly bg-black text-yellow-50'>
        <nav >
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/signin">SignIn</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin"  element={<SignInPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
