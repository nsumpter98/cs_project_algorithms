import Navbar from "./Navbar";
import NotFound from "./NotFound";
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import NSXT_Chart from "./tools/NSXT_Chart";
import NSXT_AlgorithmDemo from "./AlgorithmDemo_V1.1/NSXT_AlgorithmDemo";


function App() {
    const data = {
        labels: ['10,000', '50,000', '100,000', '500,000', '1,000,000', '5,000,000'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [0.142, 3.417, 13.67, 342.49, 1380.16, 35271.47],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
            ,
            {
                label: 'Dataset 2',
                data: [0.00152, 0.0048, 0.01, 0.039, 0.052, .212],
                borderColor: 'green',
                backgroundColor: 'green',
            },
            {
                label: 'Dataset 3',
                data: [0.014, 0.18, 0.70, 19.19, 77.53, 2556.34],
                borderColor: 'blue',
                backgroundColor: 'blue',
            }
        ],
    };

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
