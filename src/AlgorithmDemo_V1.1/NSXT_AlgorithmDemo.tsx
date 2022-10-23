import {useEffect, useState} from "react";
import NSXT_Chart from "../tools/NSXT_Chart";


export const NSXT_Algorithm_Demo = () => {
    //const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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



    return ([
        <div>
            <h1>NSXT Algorithm Demo</h1>
            <p>Here is a chart of the data:</p>
            <NSXT_Chart data={data}/>
        </div>
        ,
        <div>
            <h1>NSXT Algorithm Demo</h1>
            <p>Here is a table of the data:</p>
            <NSXT_Chart data={data}/>
        </div>
    ]);
}


export default NSXT_Algorithm_Demo;