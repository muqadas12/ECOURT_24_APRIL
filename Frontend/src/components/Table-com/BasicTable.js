import React,{useMemo} from 'react'
import MOCK_DATA from "./MOCK_DATA.json"
import columns, { COLUMNS } from "./columns"
import "./table.css"
import {useTable} from "react-table"


function BasicTable() {
    const columns=useMemo(()=>COLUMNS,[])
    const data=useMemo(()=>MOCK_DATA,[])
    const tableInstance=useTable({
        columns,
        data

    })
       
   
    const{getTableprops,getTableBodyprops,headerGroups,rows,prepareRow}=tableInstance;
    return (
        <table {...getTableprops()}>
            <thead>
                {
                    headerGroups.map(headerGroup=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>

                                ))
                            }
                       
                    </tr>

                    ))
                }
               
               
            </thead>
            <tbody {...getTableBodyprops()}>
                {
                    rows.map(row=>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell)=>{
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }
                            
                        </tr>
                        )
                    })
                }
               

            </tbody>
        </table>
    )
}

export default BasicTable




















