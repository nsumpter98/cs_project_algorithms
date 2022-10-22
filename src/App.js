import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./reference/Create";
import NotFound from "./NotFound";
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import BlogDetails from "./reference/BlogDetails";
import AgGrid from "./tools/AgGrid";
import Chart from "./tools/Chart";
import DemoGrid_Chart from "./DemoGrid-Chart";
import {ChartJs_Test} from "./tools/chartjs_test";


function App() {


  return (
    <Router>
        <div className="App">
            <Navbar />
          <div className="content">
              <Switch>
                  <Route exact path='/' element={<Home/>} />
                  <Route exact path='/create' element={<Create/>} />
                  <Route exact path='/demo' element={<DemoGrid_Chart/>} />
                  <Route exact path='/chart' element={<ChartJs_Test/>} />
                  <Route exact path='/blogs/:id' element={<BlogDetails/>} />
                  <Route path='*' element={<NotFound/>} />
              </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
