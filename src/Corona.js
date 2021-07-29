import React,{useEffect, useState} from 'react';
import './App.css';


import LineGraph from './components/LineGraph';
import CovidSummary from './components/CovidSummary';
import axios from './axios';


function Corona() {

  const [totalConfirmed,setTotalConfirmed]=useState(0);
  const [totalRecovered,setTotalRecovered]=useState(0);
  const [totalDeath,setTotalDeaths]=useState(0);
  const [Loading,setLoading]=useState(false);
  const [covidSummary,setCovidSummary]=useState({});
  const [days,setDays]=useState(7);
  const [country,setCountry]=useState('');
  const [coronaCountAr,setCoronaCountAr] =useState([]);
  const [label,setLabel]=useState([]);

  //componentdidmount
  useEffect(() => {
    
    setLoading(true);
    axios.get(`/summary`)
    .then(res=>{
      setLoading(false);

      if(res.status === 200){
        setTotalConfirmed(res.data.Global.TotalConfirmed);
        setTotalRecovered(res.data.Global.NewRecovered);
        setTotalDeaths(res.data.Global.TotalDeaths);
        setCovidSummary(res.data);
      }


      console.log(res);
    })
    .catch(error=>{
      console.log(error)
    })

  }, []);

  const formatData= (date)=>{
    const d = new Date(date);
    //2020-02-05
    const year = d.getFullYear();
    const month=`0${d.getMonth() + 1}`.slice(-2);
    const _date = d.getDate();
    return `${year}-${month}-${_date}`;
  }

  const countryHandler = (e) =>{
    setCountry(e.target.value);
    const d = new Date();
    const to = formatData(d);
    const from =formatData(d.setDate(d.getDate()-7));

    // console.log(from ,to);

    getCoronaReportByDateRange(e.target.value,from, to )
  }

  const daysHandler = (e) =>{
    setDays(e.target.value);
    const d = new Date();
    const to = formatData(d);
    const from =formatData(d.setDate(d.getDate()- e.target.value));
    getCoronaReportByDateRange(country,from,to);
  }
 
    const getCoronaReportByDateRange =(countrySlug,from,to)=>{
      axios.get(`/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
      .then(res=>{
        console.log(res);

        const yAxisCoronaCount= res.data.map(d => d.Cases);
        const xAxisLable = res.data.map(d => d.Date);
        const covidDetails = covidSummary.Countries.find(country=> country.Slug === countrySlug)

        setCoronaCountAr(yAxisCoronaCount);
        setTotalConfirmed(covidDetails.TotalConfirmed);
        setTotalRecovered(covidDetails.TotalRecovered);
        setTotalDeaths(covidDetails.TotalDeaths);
        setLabel(xAxisLable);

      })
      .catch(error=>{
        console.log(error);
      })
    }


  if(Loading){
    return <h3 style={{color:"red",textAlign:"center"}}>Stay Alert..!<br></br> Control the Virus.... </h3>
  }

  return (
    <div className="App">
      <CovidSummary 
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeath={totalDeath}
        country={country}
      />
        <div>
          <select  style={{backgroundColor:"#d4eef3"}} value={country} onChange={countryHandler}>
            <option value="">Select Country</option>
            {
              covidSummary.Countries && covidSummary.Countries.map(country=>
                <option style={{backgroundColor:"lightskyblue"}} key={country.Slug} value={country.Slug}>{country.Country}</option>)
            }
          </select>
          <select style={{backgroundColor:"#d4eef3"}} value={days} onChange={daysHandler}>
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 90 Days</option>
          </select>
        </div>

      <LineGraph 
       yAxis={coronaCountAr}
       label={label}
       />

    </div>
  );
}

export default Corona;
