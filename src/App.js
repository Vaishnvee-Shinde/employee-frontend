import "./App.css";
import FooterComponent from "./components/FooterCompnent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes,Route} from "react-router";

function App() {
    return ( 
       <div>
        <Router>
            
                <HeaderComponent/>
                <div className="container">
                    <Routes>
                        <Route path="/"  element={<ListEmployeeComponent/>}/>
                        <Route path="/employees"  element={<ListEmployeeComponent/>}/>                    
                       
                    </Routes>
                </div>
                <FooterComponent/>
         
        </Router>
        </div>
    );
}

export default App;