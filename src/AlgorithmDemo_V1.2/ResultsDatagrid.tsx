//component that uses aggrid to display results from algorithm on card
// Path: src\AlgorithmDemo_V1.1\ResultsDatagrid.tsx
// Compare this snippet from src\tools\NSXT_Chart.tsx:
//     Tooltip,
//     Legend
// );

//
// const NSXTChart = (props: any) => {
import React, {useEffect, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS


const ResultsDatagrid = (props: any) => {
    const gridRef = useRef<any>(null);

    let t: any =  {
        "quick": [
            1627019,
            5996459,
            99881415,
            297787269,
            4825219824,
            17058066979
        ],
        "insertion": [
            1701467,
            831693,
            3721193,
            144405,
            297338,
            563112
        ],
        "bubble": [
            4851058,
            41062243,
            842172127,
            2210393081,
            38510318033,
            152522200091
        ],
        "merge": [
            1514317,
            1410578,
            41446650,
            17173562,
            55642207,
            80102376
        ],
        "radix": [
            391638,
            4864941,
            12020436,
            10746868,
            62473884,
            129241924
        ]
    };


    //put data from t into grid
    let data = [];
    for (let key in t) {
        let row: any = {};
        row['algorithm'] = key;
        for (let i = 0; i < t[key].length; i++) {
            row['n' + (i + 1)] = t[key][i];
        }
        data.push(row);
    }

    //define columns
    let columns = [
        {headerName: 'Algorithm', field: 'algorithm', sortable: false, filter: false, resizable: true, draggable: false},
        {headerName: '1,000', field: 'n1', sortable: false, filter: false, draggable: false},
        {headerName: '10,000', field: 'n2', sortable: false, filter: false, draggable: false},
        {headerName: '50,000', field: 'n3', sortable: false, filter: false, draggable: false},
        {headerName: '100,000', field: 'n4', sortable: false, filter: false, draggable: false},
        {headerName: '500,000', field: 'n5', sortable: false, filter: false, draggable: false},
        {headerName: '1,000,000', field: 'n6', sortable: false, filter: false, draggable: false},
    ];








    /*useEffect(() => {
        if (gridRef.current) {
            //gridRef.current.api.setRowData(props.data);
        }
    }, [props.data]);*/

   /* const columns = [
        {headerName: "Algorithm", field: "label"},
        {headerName: "Description", field: "description"},
        {headerName: "Run Time", field: "run_time"},
        {headerName: "Array Size", field: "array_size"},
    ];*/

    return (
            <AgGridReact
                ref={gridRef}
                columnDefs={columns}
                rowData={data}
                onGridReady={params => {
                    params.api.sizeColumnsToFit();
                }}
    containerStyle={{height: '500px', width: '100%'}}
            />
    );
}

export default ResultsDatagrid;




