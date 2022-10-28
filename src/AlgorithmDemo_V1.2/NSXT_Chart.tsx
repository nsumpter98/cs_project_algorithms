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
import {Chart} from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    RadarController,
    LogarithmicScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const NSXTChart = (props: any) => {
    const chartRef = useRef<any>(null);



    //get chart to render after data is updated
    useEffect(() => {
        if (chartRef.current) {
            const chart = chartRef.current;
            chart.options.scales.y.type = 'logarithmic';
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

    }
    , [props.data]);


   /* useEffect(() => {
        const chart = chartRef.current;
        if (chart) {

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
    }, []);*/

    return (
        <Chart key={'chart1'} ref={chartRef} type="line" data={props.data}/>
    );
}

export default NSXTChart;


