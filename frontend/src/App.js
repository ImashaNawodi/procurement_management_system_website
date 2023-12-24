import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import reportWebVitals from './reportWebVitals';
import CreateUsers from './pages/admin/users/CreateUsers.jsx';
import UpdateUsers from './pages/admin/users/UpdateUsers.jsx';
import AllUsers from './pages/admin/users/AllUsers.jsx';
import { AdminHome } from './pages/admin/users/AdminHome.jsx';
import DeleteUsers from './pages/admin/users/Delete.jsx';
import PreviewUser from './pages/admin/users/PreviewUser.jsx';
import AllVendors from  './pages/admin/vendors/AllVendors.jsx';
import AddVendors from './pages/admin/vendors/AddVendors.jsx';
import DeleteVendor from './pages/admin/vendors/DeleteVendors.jsx';
import PreviewVendor from './pages/admin/vendors/PreviewVendors.jsx';
import UpdateVendor from './pages/admin/vendors/UpdateVendors.jsx';
import CommonFooter from './components/CommonFooter.jsx';
import NavbarMain from './components/NavBarMain';


const App = () => {

  const location = useLocation();
  const renderNavbar = () => {
    if (location.pathname === '/admin/:id' || location.pathname === '/loginpage' ||location.pathname === '/department')
    {
        return null;
    
    }
  
    return <NavbarMain sAuthenticated={isAuthenticated} loggedInUser={loggedInUser} handleSignOut={handleSignOut} handleSignIn={handleSignIn}/>;
  }
  const renderCommonFooter = () => {
    if (location.pathname === '/loginpage')
    {
        return null;
    
    }
  
    return <CommonFooter />;
  }
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSignIn = (user) => {
    setIsAuthenticated(true);
    setLoggedInUser(user);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setLoggedInUser(null);
  };

  return (
    <div>
  {renderNavbar()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/loginpage"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <LoginPage setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
         <Route path="/adminhome/:id" element={<AdminHome />} />
        <Route path="/createusers" element={<CreateUsers />} />
        <Route path="/updateusers/:id" element={<UpdateUsers />} />
        <Route path="/deleteusers/:id" element={<DeleteUsers />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/previewuser/:id" element={<PreviewUser />} />

        <Route path="/allvendors" element={<AllVendors />} />
        <Route path='/addvendors' element={<AddVendors/>} />
        <Route path="/deletevendor/:id" element={<DeleteVendor/>} />
        <Route path="/previewvendor/:id" element={<PreviewVendor />} />
        <Route path="/updatevendor/:id" element={<UpdateVendor/>} />

      </Routes>
  
  {renderCommonFooter ()}
    </div>
  );
};
reportWebVitals();
export default App;
