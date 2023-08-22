import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
  export default function AreaChart({activites})
  {
    const [selected,setSelected]=useState("0");
    const[guests,setGuests]=useState(  [100,430,140,450,160,260])
    const[users,setUsers]=useState( [200,395,205,295,195,430])
useEffect(()=>{
    if(selected!=null&&activites!=null){
        

      const index=parseInt(selected)
      setUsers(activites[0].user[index])
      setGuests(activites[1].guest[index])

    
    }
 

},[selected])
    const series= [{
        name: 'Guest',
        color:'#E9A0A0',
       
        data: guests
      }, {
        name: 'User', 
        data: users,
        color:'#9BDD7C',
      },
      
    ]
      
        const options=  {
           
           
          chart: {
            height: 200,
            type: 'line',
            toolbar: {
            show: false, 
          },
          }, 
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          legend: {
            position: 'top', 
            horizontalAlign: 'right', 
          },
          xaxis:{
              categories:["","Week 1","Week2","Week 3","Week 4",""],
              title: {
              }
    
             },
         yaxis:[{
        title: {
          text: ""
        }
      },
       
      ],
    
       
      }
        
     return <div id="chart">
    <p style={{fontWeight:700,color:"#000000",fontSize:"18px",margin:"0",marginLeft:"30px",marginTop:"25px"
}}>Activites</p>
    <select style={{margin:"0",marginLeft:"25px"}} value={selected} onChange={(event)=>{setSelected(event.target.value)
    
    }
    }>
        <option value="0">May - June 2021</option>
        <option value="1">June - July 2021</option>
      <option value="2">July - August 2021</option>
    
    </select>
  <ReactApexChart options={options} series={series} type="line"  height={200}/>
</div>
;
  }

