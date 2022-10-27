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

    useEffect(() => {
        if (gridRef.current) {
            gridRef.current.api.setRowData(props.data);
        }
    }, [props.data]);

    const columns = [
        {headerName: "Algorithm", field: "label"},
        {headerName: "Description", field: "description"},
        {headerName: "Run Time", field: "run_time"},
        {headerName: "Array Size", field: "array_size"},
    ];

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <AgGridReact
                ref={gridRef}
                columnDefs={columns}
                rowData={props.data}
                onGridReady={params => {
                    params.api.sizeColumnsToFit();
                }}
            />
        </div>
    );
}

export default ResultsDatagrid;




