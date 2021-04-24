import React from "react";
import {Bar} from "react-chartjs-2"
import "./BarChart.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const BarChart=(props)=>{
    
    const data={
        labels:['2007','2012','2016'],
        datasets:[
            {
                label:'civil cases ',
                data:[1000,2000,1000,5000,2300,4000,3000,4000,100],
                borderColor:['rgba(255,206,86,0.2)'],
                backgroundColor:['rgba(255,206,86,0.2)'],
                
            },
            {
                label:'other cases ',
                data:[5000,200,50,700,8000,4500,7000,500,3500],
                // borderColor:['rgb(60, 179, 113)'],
                // backgroundColor:['rgb(60, 179, 113)'],
                // pointBackgroundColor:'rgb(60, 179, 113)'
            },
            {
                label:'criminal cases ',
                data:[6000,2600,4600,1050,1100,2200,5500,750],
                borderColor:['rgba(255, 99, 71, 0.5)'],
                backgroundColor:['rgba(255, 99, 71, 0.5)'],
                
            }
        ]
    }
   const options={
       title:{
           display:true

       },
       scales:{
           yAxes:[
               {
                   ticks:{
                       min:0,
                       max:10000,
                       stepSize:2
                   }
               }
           ]
       }
   }

    
    return(
        <div className="A">
            <div className="chart">
            <h5 className="court-heading-1">Appeals Court Cases Filed by Type  Years ending March 31</h5>
            <Bar data={data}  />

            </div>
            <div>
            <button className="forward-button" onClick={() => {
                props.history.push("/DoughnutChart");
              }}><span className="material-icons">
              <ArrowForwardIosIcon/>
              </span></button>
              </div>
<br/>

              <div>
            <button className="back-button" onClick={() => {
                props.history.push("/LineChart");
              }}><span class="material-icons">
              <ArrowBackIosIcon/>
              </span></button>
              </div>
   
    </div>
    
    )

}
export default BarChart;





