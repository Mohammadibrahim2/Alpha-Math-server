
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { DarkMood } from './Pages/Darkmood/DarkLightTemplete.js/Dark';


function App() {

  const{dark}=useContext(DarkMood)
  return (
    <div className={`${dark?"bg-slate-700":"bg-slate-200"} px-0`}>


<RouterProvider router={routes}>
    
    </RouterProvider>

    <Toaster position='"top-center'></Toaster>
     


    </div>
  );
}

export default App;
