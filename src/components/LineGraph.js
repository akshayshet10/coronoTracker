import React from 'react';
import {Line} from 'react-chartjs-2';
import './LineGraph.css';


const LineGraph = (props) => {
    return (
        <div className="graphline">
            <Line data={
                {
                    labels:props.label.map(l=>l.substr(0, 10)),
                    datasets: [
                        {
                      label: 'CoronaVirus accross the Country',
                      data: props.yAxis,
                      fill: true,
                      borderColor: 'rgb(6, 136, 153)',
        
                      tension: 0.2
                    }]
                  }
            }
            
            />
        </div>
    )
}



export default LineGraph;

