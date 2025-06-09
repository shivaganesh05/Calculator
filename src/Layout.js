import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import HeaderPage from './headerPage';
import Sidebar from './sidebar';

import PostJob from './pages/postJob';

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100 w-100">
      <div className="fixed-top bg-white shadow-sm">
        <HeaderPage heading="" />
      </div>

      <div className="flex-grow-1 d-flex pt-5">
        <div className="position-fixed top-0 pt-5 h-100 sidebar_content shadow-sm" style={{ width: '15rem' }}>
          <Sidebar />
        </div>
        <div className="flex-grow-1 overflow-auto ml-15rem pt-5" style={{ marginLeft: '15rem' }}>
          <Container>
            <Routes> <Route path="/addPost" element={<PostJob />} />
          <Route path="/addCategory" element={<PostJob />} />
              <Route path="/postJob" element={<PostJob />} />
            </Routes>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Layout;
