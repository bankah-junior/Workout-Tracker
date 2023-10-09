import './globals.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Men, Profile, Women } from './pages';
import { LoginBox, SignupBox } from './components';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext()

  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={ !user ? <LoginBox /> : <Navigate to={'/'} /> } />
        <Route path='/signup' element={ !user ? <SignupBox /> : <Navigate to={'/'} /> } />
        <Route path='/men' element={ user ? <Men /> : <Navigate to={'/login'} /> } />
        <Route path='/women' element={ user ? <Women /> : <Navigate to={'/login'} /> } />
        <Route path='/profile' element={ user ? <Profile /> : <Navigate to={'/login'} /> } />
      </Routes>
    </div>
  );
}

export default App;
