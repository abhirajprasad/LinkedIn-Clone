// import { useDispatch, useSelector } from 'react-redux';
// import React, { useEffect } from 'react';
// import './App.css';
// import { login, logout, selectUser } from './features/userSlice';
// import Feed from "./Feed";
// import Header from "./Header"; 
// import Login from './Login';
// import Sidebar from "./Sidebar";
// import { auth } from './firebase';

// function App() {

  
//   const [user, setUser] = useSelector(selectUser);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     auth.onAuthStateChanged(userAuth => {
//       if(userAuth) {
//         //user is logged in
//         dispatch(
//           login({
//             email: userAuth.email,
//             uid: userAuth.uid,
//             displayName: userAuth.displayName,
//             photoUrl: userAuth.photoURL,
//         }))
//       }
//       else {
//         //user is logged out
//         dispatch(logout());

//       }
//     })
//   })

//   return (
//     <div className="App">   
    
//       <Header />     
      
//       {!user ? (
//         <Login />
//       ) : ( 
//           <div className="app_body">
//             <Sidebar/>
//             <Feed/>
//             {/* widgets */}      
//           </div> 
//       )}           
//     </div>
//   );
// }

// export default App;


import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { auth } from './firebase';

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          {/* widgets */}
        </div>
      )}
    </div>
  );
}

export default App;