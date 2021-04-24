import React from "react";
import {Line} from "react-chartjs-2"
import "./LineChart.css"
const LineChart=(props)=>{
    
    const data={
        labels:['2011','2012','2013','2014','2015','2016','2017','2018','2019'],
        datasets:[
            {
                label:'pending cases ',
                data:[3000,2000,1000,5000,2300,1500,2500,4000,600],
                borderColor:['rgba(255,206,86,0.2)'],
                backgroundColor:['rgba(255,206,86,0.2)'],
                pointBackgroundColor:'rgba(255,206,86,0.2)'
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
            <h5 className="court-heading-1">Appeal court case Filed</h5>
            <Line data={data}  />

            </div>
          {/* <div>
            <button className="forward-button" onClick={() => {
                props.history.push("/BarChart");
              }}><span className="material-icons">
              arrow_forward_ios
              </span></button>
            </div> */}

   
    </div>
    
    )

}
export default LineChart;





