import AgGrid from "./tools/AgGrid";
import Chart from "./tools/Chart";


const DemoGrid_Chart = () => {
    let t = "<Recharts />";
    return ([
        <div>
            <h1>Chart using <code>{t}</code></h1>
            <Chart />
        </div>,
            <div>
                {/*some separator*/}
                <hr />



            </div>,

        <div>
            <h1>Grid using <code>AgGrid</code></h1>

            <AgGrid />
        </div>
]
    );
}

export default DemoGrid_Chart;

