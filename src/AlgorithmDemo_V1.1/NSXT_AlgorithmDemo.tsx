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
        for(let i = 0; i < 7; i++) {
            //increase size slowly
            let size = 1000 * Math.pow(2, i);

            console.log(size);
            let data = NSXT_SortAlgorithms.generateRandomArray(size);
            let result = NSXT_SortAlgorithms.runAllAlgorithms(data);
            try {
                results.bubble.run_times.push(result.bubbleSort.time);
                results.insertion.run_times.push(result.insertionSort.time);
                results.merge.run_times.push(result.mergeSort.time);
               // results.quick.run_times.push(result.quickSort);
                results.radix.run_times.push(result.radixSort.time);
                //console.log(result.radixSort);
            } catch (e) {
                console.log(e);
            }
        }

        // @ts-ignore
        config.datasets[0].data = results.insertion.run_times;
        // @ts-ignore
        config.datasets[1].data = results.bubble.run_times;
        // @ts-ignore
        config.datasets[2].data = results.merge.run_times;
        // @ts-ignore
        config.datasets[3].data = [];
        // @ts-ignore
        config.datasets[4].data = results.radix.run_times;
        setData(config);

        console.log(config);






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