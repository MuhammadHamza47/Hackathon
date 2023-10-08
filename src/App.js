import React, { useEffect, useState } from 'react';
import './App.css';

// import Sidebar from './components/Sidebar/Sidebar';
import Routing from './Pages/Routing';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import '../src/config/global';
function App() {
  const [isLoading, setIsLoading] = useState(true)
useEffect(() =>{
  setTimeout(() =>{
    setIsLoading(false);
  }, 1500);
}, []);
  return (
    <>
    {isLoading ? (
      <div class="d-flex justify-content-center align-items-center vh-100">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
    ) :(
      <>
      <Routing/>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </>
    )}
    
    </>
    
  );
}

export default App;
