import {useEffect, useState} from "react";
import NSXT_Chart from "../tools/NSXT_Chart";
import './NSXT.css';



export const NSXT_Algorithm_Demo = () => {
    let config: any = {
        labels: ['10,000', '50,000', '100,000', '500,000', '1,000,000', '5,000,000'],
        datasets: [
            {
                label: 'Insertion',
                data: [0.142, 3.417, 13.67, 342.49, 1380.16, 35000.6],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
            ,
            {
                label: 'Bubble',
                data: [0.00152, 0.0048, 0.01, 0.039, 0.052, .212],
                borderColor: 'green',
                backgroundColor: 'green',
            },
            {
                label: 'Merge',
                data: [0.014, 0.18, 0.70, 19.19, 77.53, 2556.34],
                borderColor: 'blue',
                backgroundColor: 'blue',
            },
            {
                label: 'Quick',
                data: [.03, .11, .23, 1.5, 5.8, 200],
                borderColor: 'orange',
                backgroundColor: 'orange',
            },
            {
                label: 'Radix',
                data: [0.001, 0.002, 0.003, 0.007, 0.012, 0.05],
                borderColor: 'purple',
                backgroundColor: 'purple',

            }
        ],
    };

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [randomData, setRandomData] = useState([]);
    const [data, setData] = useState(config);

    let results: any[];






    useEffect(() => {
        console.log(data);
        setLoading(false);

    }
    , []);




    return ([
        <div key={'123'} id={"card"}>
            <div className="content">
                <h1>Algorithm Demo</h1>
                <p>Here you can see the performance of the sorting algorithms</p>
                <NSXT_Chart data={data}/>
            </div>

        </div>
    ]);
}


export default NSXT_Algorithm_Demo;