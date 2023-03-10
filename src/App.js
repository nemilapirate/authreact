import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/navbar";
import SignUpModal from "./Components/SignUpModal";


function App() {
  return (
    <>
      <SignUpModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
