import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Statewise from './components/StateWiseData/statewise';
import Statewise from './components/StateWiseData/Statewise';
import Karnataka from './components/Karnataka/Karnataka';
import Corona from './Corona';
import Navbar from './Navbar';


const App = () => {
    return (
       <Fragment>
           <Router>
               <Navbar />
               <Switch>
                   <Route path="/" exact>
                        <Corona />
                   </Route>
                   <Route path="/india" exact>
                        <Statewise />
                        
                   </Route>
                   <Route path="/karnataka" exact>
                       <Karnataka />
                       <h1>avsfhasghj</h1>
                       
                   </Route>
                  
               </Switch>
           </Router>
        
       </Fragment>
    )
}

export default App
