import Navbar from "./Navbar";
import NotFound from "./NotFound";
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import NSXT_AlgorithmDemo from "./AlgorithmDemo_V1.2/NSXT_AlgorithmDemo";


function App() {


  return (
    <Router>
        <div className="App">

            <Navbar />

          <div className="content">

              <Switch>
                  <Route exact path='/' element={<NSXT_AlgorithmDemo/>} />
                  <Route path='*' element={<NotFound/>} />
              </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
