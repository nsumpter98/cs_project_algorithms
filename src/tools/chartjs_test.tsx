import {useEffect, useRef} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    RadarController,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, LogarithmicScale,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    RadarController,
    LogarithmicScale ,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);





export const options = {

    interaction: {

        mode: 'nearest',
    },

};



const labels = ['10,000', '50,000', '100,000', '500,000', '1,000,000', '5,000,000'];
//test dataset



export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [0.142, 3.417, 13.67, 342.49, 1380.16, 35271.47] ,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
        ,
        {
            label: 'Dataset 2',
            data: [0.00152, 0.0048, 0.01, 0.039, 0.052, .212] ,
            borderColor: 'green',
            backgroundColor: 'green',
        },
        {
            label: 'Dataset 3',
            data: [0.014, 0.18, 0.70, 19.19, 77.53, 2556.34] ,
            borderColor: 'blue',
            backgroundColor: 'blue',
        }
    ],
};

export function ChartJs_Test() {
    const chartRef = useRef<ChartJS>(null);


    useEffect(() => {
        const chart = chartRef.current;

        if (chart) {
            console.log('ChartJS', chart);

            //update chart scale
            // @ts-ignore
            chart.options.scales.y.type = 'logarithmic';
            // @ts-ignore
            chart.options.interaction.axis = 'xy';
            // @ts-ignore
            chart.options.interaction.intersect = false;
            // @ts-ignore
            chart.options.interaction.mode = 'index';
            // @ts-ignore
            chart.options.scales.x = {
                display: true,
            };



            chart.update();

        }
    }, []);



    return <Chart ref={chartRef} type='line' data={data}  />;
}
