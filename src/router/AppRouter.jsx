import { Route, Routes } from "react-router-dom"
import { LoginPage } from '../auth/pages/LoginPage';
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>

        <Routes>
        
           {/* <Route path="login" element={
              <PublicRoute>
                <LoginPage/>
              </PublicRoute>
           } /> */}

           {/* otra forma de hacerlo permite añadir varias */}
           <Route path="login/*" element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage/>}/>
              </Routes>
            </PublicRoute>
           }/>

            <Route path="/*" element={
              <PrivateRoute>
                  <HeroesRoutes/>
              </PrivateRoute>
            }/>

            {/* <Route path="login" element={<LoginPage/>}/> */}
{/* 
            <Route path="/*" element={<HeroesRoutes/>}/> */}


        </Routes>
    </>
  )
}
