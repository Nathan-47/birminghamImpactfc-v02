import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import './sass/style.scss';
import Register from './pages/register';
import Landing from './pages/Landing';
import Contact from './pages/contact';
import Legacy from './pages/legacy';
import Rules from './pages/rules';
import Accreditedclubnews from './pages/accreditedclubnews';
import Matches from './pages/matches';
import Teams from './pages/teams';
import Navbar from './layouts/Navbar';
import NotExist from './pages/NotExist';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>  
      <Route index element={<Landing />} />
      <Route path="register" element={<Register />} /> 
      <Route path="matches" element={<Matches />} /> 
      <Route path="teams" element={<Teams />} /> 
      <Route path="rules" element={<Rules />} /> 
      <Route path="legacy" element={<Legacy/>} /> 
      <Route path="contact" element={<Contact />} /> 
      
      {/* 404 page link */}
      <Route path="*" element={<NotExist />} />

      {/* News page links */}
      <Route path="Accreditedclubnews" element={<Accreditedclubnews />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;

