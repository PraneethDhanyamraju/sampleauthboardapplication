import { useEffect, useState } from "react";
import axios from "axios";

import AreaChart from "./AreaChart";
import CardStack from "./CardStack";
import Header from "./Header";
import PieChart from "./PieChart";
import Schedule from "./Schedule";

export default function Dashboard()
{
    const[data,setData]=useState([])
    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_URL)
          .then(response => {
            setData(response.data);
    
          })
          .catch(error => {
            console.error(error);
          });
      }, []); 
      
    return<div className="dashboard-container">
            <Header/>
            <CardStack estimates={data.estimates}/>
            <AreaChart activites={data.activites}/>
            <div className="products-schedule">   
            <PieChart products={data.products}/>
            <Schedule schedules={data.schedules}/>
            <br/>
            </div>
            
    </div>
}