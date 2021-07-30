import React from 'react';
import Card from './Card';
import NumberFormat from 'react-number-format';

function KarnatakaSummary(props) {
    const{
        totalConfirmed,
        totalRecovered,
        totalDeath,
        country
    }= props
    return (
        <div>
             <div>
        <div>
          <h1 style={{textTransform:"capitalize",color:"#03033e",fontWeight:"bold"}}>{country ===''?'World wide Corona Report':country} </h1>
          <div 
          style={{
            display:"flex",
            justifyContent:"center"
          }}
          >
          <Card>
            <span style={{fontWeight:"bold"}}>Total conformed</span><br/>
            <span>{<NumberFormat
                   value={totalConfirmed}
                   displayType={"text"} 
                   thousandSeparator={true}          
            />}</span>
          </Card>
          <Card>
            <span style={{fontWeight:"bold"}}>Total Recovered</span><br/>
            <span>{<NumberFormat
                   value={totalRecovered}
                   displayType={"text"} 
                   thousandSeparator={true}          
            />}</span>
          </Card>
          <Card>
            <span style={{fontWeight:"bold"}}>Total Deaths</span><br/>
            <span>{<NumberFormat
                   value={totalDeath}
                   displayType={"text"} 
                   thousandSeparator={true}          
            />}</span>
          </Card>
          </div>
          
        </div>
      </div>
        </div>
    )
}



export default KarnatakaSummary;