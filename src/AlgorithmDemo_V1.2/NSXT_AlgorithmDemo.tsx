import {useEffect, useState} from "react";
import NSXT_Chart from "./NSXT_Chart";
import './NSXT.css';
import '../tools/loader.css';
import ResultsDatagrid from "./ResultsDatagrid";
import useFetch from "./useFetch";



export const NSXT_Algorithm_Demo = () => {
    let config: {} = {
        labels: ['1,000', '2,000', '4,000', '8,000', '16,000', '32,000', '64,000'],
        datasets: [
            {
                label: 'Insertion',
                data: [0.142, 3.417, 13.67, 342.49, 1380.16, 35000.6],
                borderColor: 'rgb(250,229,94)',
                backgroundColor: 'rgba(255,246,66,0.5)',
            }
            ,
            {
                label: 'Bubble',
                data: [0.00152, 0.0048, 0.01, 0.039, 0.052, .212],
                borderColor: 'red',
                backgroundColor: 'red',
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
                borderColor: 'green',
                backgroundColor: 'green',
            },
            {
                label: 'Radix',
                data: [0.001, 0.002, 0.003, 0.007, 0.012, 0.05],
                borderColor: 'purple',
                backgroundColor: 'purple',

            }
        ],
    };
    let results: any = {
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



    //make bool loading state
    const [check, setCheck] = useState(false);
    const [data, setData] = useState(config);


    //make fetch call to get data
    const {isPending, error, data: data2} = useFetch('https://us-central1-macro-context-366821.cloudfunctions.net/function-1');


    //when isPending is false, set data to data2
    useEffect(() => {
        if (!isPending) {
            runSort();
        }
    }
        , [isPending]);

    // 1. generate random data
    // 2. run all algorithms
    // 3. store results in results object
    // 4. update chart with results
function runSort() {

console.log(data2);

        // @ts-ignore
        config.datasets[0].data = data2.insertion;
        // @ts-ignore
        config.datasets[1].data = data2.bubble;
        // @ts-ignore
        config.datasets[2].data = data2.merge;
        // @ts-ignore
        config.datasets[3].data = data2.quick;
        // @ts-ignore
        config.datasets[4].data = data2.radix;
        /*setData({ ...config });
        setCheck(false);*/

    setData({
        labels: ['1,000', '10,000', '50,000', '100,000', '500,000', '1,000,000'],
        datasets: [
            {
                label: 'Insertion',
                // @ts-ignore
                data: data2.insertion,
                borderColor: 'rgb(250,229,94)',
                backgroundColor: 'rgba(255,246,66,0.5)',

            }
            ,
            {
                label: 'Bubble',
                // @ts-ignore
                data: data2.bubble,
                borderColor: 'red',
                backgroundColor: 'red',

            }
            ,
            {
                label: 'Merge',
                // @ts-ignore
                data: data2.merge,
                borderColor: 'blue',
                backgroundColor: 'blue',

            }
            ,
            {
                label: 'Quick',
                // @ts-ignore
                data: data2.quick,
                borderColor: 'green',
                backgroundColor: 'green',

            }
            ,
            {
                label: 'Radix',
                // @ts-ignore
                data: data2.radix,
                borderColor: 'purple',
                backgroundColor: 'purple',

            }
        ],
    });


    }


    return ([


        <div key={'123'} className={'card'} /*add padding between cards*/ >


            {isPending ?
                (
                    <img className="image"
                         src="https://purepng.com/public/uploads/large/91508177304fwtqbi6ctvq3s7govin9kdhbopkgx6pm2tw9buwrhpiqjgygotyhs5dblx1tu7hnlc4ybfyrbkoebudhrtkjjfco08gx1ebrpncy.png" alt=""
                         ></img>

                ) : (
                    <div key={'chart'}>
                        <div className="title">
                            <h1>Algorithm Demo</h1>
                        </div>
                        <NSXT_Chart data={data}/>
                    </div>
                )

            }


        </div>,
        <div key={'1234'} className={'card'} /*add padding between cards*/ >


            {isPending ?
                (
                    <img className="image"
                         src="https://purepng.com/public/uploads/large/91508177304fwtqbi6ctvq3s7govin9kdhbopkgx6pm2tw9buwrhpiqjgygotyhs5dblx1tu7hnlc4ybfyrbkoebudhrtkjjfco08gx1ebrpncy.png" alt=""
                    ></img>

                ) : (
                    <div key={'chart'}>
                        <div className="title">
                            <h1>Results in nanoseconds</h1>
                        </div>
                        <ResultsDatagrid data={data2}/>
                    </div>
                )

            }


        </div>

    ]);
}


export default NSXT_Algorithm_Demo;