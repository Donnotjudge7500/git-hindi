import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.js';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import User from './Components/User/User';
import Github, { githubInfoLoader } from './Components/Github/Github';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [{ path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       {path: "contact", element: <Contact />}]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
      <Route path='' element={ <Home /> } />
      <Route path='about' element={ <About /> } />
      <Route path='contact' element={ <Contact /> } />
      <Route path='user/:userid' element={ <User /> } />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={ <Github /> } 
        
        />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

