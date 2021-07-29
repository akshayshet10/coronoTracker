import React, { useState,useEffect } from 'react';
import './statewise.css';


const Statewise = () => {

     const [data, setData] = useState([]);
        
        const getCovidData = async() =>{
          const res = await fetch('https://api.covid19india.org/data.json');
          const actualData = await res.json();
          console.log(actualData.statewise);

          setData(actualData.statewise);
        }

        useEffect(() => {

        getCovidData();
    }, []);

    return (
        <>
          
           <div className="container-fluid mt-1">
               <div className="main-heading"> 
               <h3 className="mb-2"> Tracking <span className="sfont">India's</span> CoronaVirus Report </h3> 

               </div>
               <div className="table-responsive">
                   
                <table className="table table-hover">
                    
                    <thead className="thead-dark">
                        <tr>
                            <th>States</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Death</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>

                    </thead>
                    
                    <tbody>
                            {
                                data.map((curEle, ind)=>{

                                    return(
                                     <tr key={ind}>
                                        <td>{curEle.state} </td>
                                        <td>{curEle.confirmed}</td>
                                        <td>{curEle.recovered}</td>
                                        <td>{curEle.deaths}</td>
                                        <td>{curEle.active}</td>
                                        <td>{curEle.lastupdatedtime}</td>
                                     </tr>

                                    )

                                }
                              )
                            }          
                    </tbody>
                    
                </table>
                

               </div>
               
           </div>
           <div className="footer">
               <h6>Akshay shet G @2021</h6>
                </div>
        </>
    )
}


export default Statewise;
