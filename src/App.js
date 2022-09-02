
import Home from "./routes/home/home.component";
import {Routes,Route} from 'react-router-dom';
import SignIn from "./routes/sign-in/sign-in.component";
import Navigation from "./routes/navigation/navigation.component";



const Shop=()=>{

  return(
    <div>
      <h1>I am the Shop</h1>
    </div>
  );
}



function App() {

  console.log("App.jsx çalıştı")
  
  return (
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='sign-in' element={<SignIn/>} />
      </Route>
    </Routes> 
  );
}

export default App;
