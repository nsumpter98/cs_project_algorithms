import {useEffect, useState} from "react";
import NSXT_Chart from "../tools/NSXT_Chart";
import './NSXT.css';
import '../tools/loader.css';
import NSXT_SortAlgorithms from "./SortingAlgorithms/NSXT_SortAlgorithms";
import ResultsDatagrid from "./ResultsDatagrid";



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


    //update config and rerender chart
    const updateConfig = (newConfig: any) => {

        setData(newConfig);
        console.log("update config" + newConfig);


    }

    const runSorts = () => {
        let sort = new NSXT_SortAlgorithms();
        let sortResults = runSort();
   /*     console.log(config);
        updateConfig(config);*/
    }








    // 1. generate random data
    // 2. run all algorithms
    // 3. store results in results object
    // 4. update chart with results
function runSort() {


        for (let i = 0; i < 7; i++) {
            //increase size slowly
            let size = 5000 * Math.pow(2, i);
            let data = NSXT_SortAlgorithms.generateRandomArray(size);
            let result = NSXT_SortAlgorithms.runAllAlgorithms(data);
            try {
                //pause for 1 second


                //I'm using a ternary operator here since the chart is logarithmic, and ChartJs doesn't like 0 values.
                //Because log(0) is undefined, I'm using a very small number instead.
                results.bubble.run_times.push((result.bubbleSort.time === 0 ? 0.001 : result.bubbleSort.time));
                results.insertion.run_times.push(result.insertionSort.time === 0 ? 0.001 : result.insertionSort.time);
                results.merge.run_times.push(result.mergeSort.time === 0 ? 0.001 : result.mergeSort.time);
                results.quick.run_times.push(result.quickSort.time === 0 ? 0.001 : result.quickSort.time);
                results.radix.run_times.push(result.radixSort.time === 0 ? 0.001 : result.radixSort.time);
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
        /*setData({ ...config });
        setCheck(false);*/

    setData({
        labels: ['1,000', '2,000', '4,000', '8,000', '16,000', '32,000', '64,000'],
        datasets: [
            {
                label: 'Insertion',
                data: results.insertion.run_times,
                borderColor: 'rgb(250,229,94)',
                backgroundColor: 'rgba(255,246,66,0.5)',

            }
            ,
            {
                label: 'Bubble',
                data: results.bubble.run_times,
                borderColor: 'red',
                backgroundColor: 'red',

            }
            ,
            {
                label: 'Merge',
                data: results.merge.run_times,
                borderColor: 'blue',
                backgroundColor: 'blue',

            }
            ,
            {
                label: 'Quick',
                data: results.quick.run_times,
                borderColor: 'green',
                backgroundColor: 'green',

            }
            ,
            {
                label: 'Radix',
                data: results.radix.run_times,
                borderColor: 'purple',
                backgroundColor: 'purple',

            }
        ],
    });


    }


    return ([

        <button type="submit">{check ? <>Loading..</> : <>{"results"}</>}</button>,
        <div key={'t'} className={'card'}>
            <div className={'title'}>
                <h2>Controls</h2>

            </div>

            <div className={'content'}>
                {/*make button toolbar*/}
                <div className={'button-toolbar buttons'}>
                    <button className={'button'} onClick={runSorts}>Run</button>
                    <button className={'button'}>Export</button>


                </div>
            </div>

        </div>
        ,


        <div key={'123'} className={'card'}>


            {check ?
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
        <div key={'ts'} className={'card'}>
            <div className={'title'}>
                <h2>Results</h2>

            </div>

            <div className={'content'}>
               {/* <ResultsDatagrid results={results}/>*/}
            </div>
        </div>

    ]);
}


export default NSXT_Algorithm_Demo;