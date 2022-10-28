
import React, {useEffect, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS


const ResultsDatagrid = (props: any) => {
    const gridRef = useRef<any>(null);

    let t: any =  props.data;

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








    return (
        <div className="ag-theme-alpine" style={{height: '500px', width: '100%'}}>
            <AgGridReact
                ref={gridRef}
                columnDefs={columns}
                rowData={data}
                onGridReady={params => {
                    params.api.sizeColumnsToFit();
                }}
            />
        </div>
    );
}

export default ResultsDatagrid;




