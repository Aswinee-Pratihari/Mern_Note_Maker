import Header from './components/Header';
import Footer from './components/Footer'
import Landing from './screens/LandingPage/Landing';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MyNotes from './screens/Mynotes/MyNotes';
function App() {
  return (
   <>
<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<Landing/>} />
<Route path="/notes" element={<MyNotes/>} />
</Routes>
  <Footer/>
</BrowserRouter>
 

   </>
  );
}

export default App;
