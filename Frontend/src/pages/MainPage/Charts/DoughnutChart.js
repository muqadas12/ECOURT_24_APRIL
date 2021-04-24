import React from "react";
import {Doughnut} from "react-chartjs-2"
import "./Dough.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const DoughnutChart=(props)=>{
    
const data={
        labels:['2011','2012','2013','2014','2015','2016','2017','2018','2019'],
        datasets:[
            {
                label:'pending cases ',
                data:[3000,2000,1000,5000,2300,1500,2500,4000,600],
               
                backgroundColor:['rgba(255,99,132,1)',
                'rgba(255,205,86,1)',
                'rgba(54,162,235,1)',
                'rgba(255,159,64,1)',
                'rgba(153,102,255,1)'

            ],
               
            },
            {
                label:'solve cases ',
                data:[1000,3000,2000,200,3000,400,600,1200,505]
            }
        ]
    }
    
    
    return(
        <div className="A">
            <div className="chart">
            <h5 className="court-heading-1">Civil case Field, Terminated and pending Years Ending March 31</h5>
            <Doughnut data={data}  />

            </div>
            <div>
            <button className="forward-button" onClick={() => {
                props.history.push("/BarChart");
              }}><span class="material-icons">
            <ArrowBackIosIcon/>
              </span></button>
              </div>
           

   
    </div>
    
    )

}
export default DoughnutChart;





