import "./App.css";
import Formular from "./components/Formular";
import Home from "./components/Home";
import {Link, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <div id="rc_logo">
                <a href="#home" title="Logo">LOGO</a>
            </div>

            <nav className="rc_nav" id="centered_nav">
                <Link to="/">Home</Link>
                <Link to="/formular">Formular</Link>
            </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formular" element={<Formular />}></Route>
    </Routes>
        </div>
    );
}

export default App;

