// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template tadonga kat kay mahal ang tuition
//     </div>
//   );
// }
import { SharedLayout } from "pages/SharedLayout";
import { HomePage } from '../pages/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { ContactsPage } from "pages/ContactsPage";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
       <Route index element={<HomePage/>} />
       <Route 
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={RegisterPage}
            />
          }
       />

       <Route 
        path="/login"
        element={
          <RestrictedRoute redirectTo="/contacts" component={LoginPage}/>
        }
        />
        </Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={ContactsPage} />
          }
        />
      </Routes>      
    </>
  );
};