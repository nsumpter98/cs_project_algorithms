import {useEffect, useState} from "react";
import NSXT_Chart from "../tools/NSXT_Chart";
import './NSXT.css';
import NSXT_SortAlgorithms from "./SortingAlgorithms/NSXT_SortAlgorithms";


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
    const [randomData, setRandomData] = useState();
    const [data, setData] = useState(config);

    let results: any =
        {
            "bubble": {
                "description": "Bubble sort",
                "run_times": []
            },
            "insertion": {
                "description": "Insertion sort",
                "run_times": []
            },
            "selection": {
                "description": "Selection sort",
                "run_times": []
            },
            "merge": {
                "description": "Merge sort",
                "run_times": []
            },
            "quick": {
                "description": "Quick sort",
                "run_times": []
            },
            "radix": {
                "description": "Radix sort",
                "run_times": []
            }


    };


    useEffect(() => {
            console.log(data);
            setLoading(false);

        }
        , []);


    function runSort() {
        let array: any = NSXT_SortAlgorithms.generateRandomArray(50000);
        let {arr, time} = NSXT_SortAlgorithms.insertionSort(array);
        results.insertion.run_times.push(time);
        let {arr: arr2,time:  time2} = NSXT_SortAlgorithms.bubbleSort(array);
        results.bubble.run_times.push(time2);
       // let {arr: arr3,time: time3} = NSXT_SortAlgorithms.mergeSort(array);
       // let {arr: arr4,time:  time4} = NSXT_SortAlgorithms.quickSort(array);
        let {arr: arr5,time:  time5} = NSXT_SortAlgorithms.radixSort(array);
        results.radix.run_times.push(time5);

        //['10,000', '50,000', '100,000', '500,000', '1,000,000', '5,000,000']
        //run each sort
        //add the time to the results object
        //update the chart

        // @ts-ignore
        config.datasets[0].data = results.insertion.run_times;
        // @ts-ignore
        config.datasets[1].data = results.bubble.run_times;
        // @ts-ignore
        config.datasets[2].data = results.merge.run_times;
        // @ts-ignore
        config.datasets[3].data = results.quick.run_times;
        // @ts-ignore
        config.datasets[4].data = results.radix.run_times;




    }

    return ([

        <div className={'card'}>
            <div className={'title'}>
                <h2>Controls</h2>

            </div>
            <div className={'content'}>
                {/*make button toolbar*/}
                <div className={'button-toolbar buttons'}>
                    <button className={'button'} onClick={() => runSort()}>Run</button>
                    <button className={'button'}>Export</button>


                </div>
            </div>

        </div>
        ,

        <div key={'123'} className={'card'}>
            <div className="title">
                <h1>Algorithm Demo</h1>
            </div>
            <NSXT_Chart data={data}/>


        </div>
    ]);
}


export default NSXT_Algorithm_Demo;