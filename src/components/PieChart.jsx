import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
export default function PieChart({products})

{
    const [selected,setSelected]=useState("0");
    const [percentage,setPercentage]=useState([14,31,55]);
   const [product,setProduct]=useState(["Super Hoodies","Custom Short Pants","Basic Tees"]);
   
    
    useEffect(()=>{
        if(selected!=null&&products!=null){
        
            
    
          const index=parseInt(selected)
        setPercentage(products[index].percentages)
        setProduct(products[index].product)
   
        console.log(product)
        console.log(percentage)
        }
    },[selected])
    
    const series=percentage
    const options = {
        colors:["#98D89E", "#EE8484","#F6DC7D"],
        chart: {
        width: 200,
        type: 'pie',
      },
      labels: product,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
        
          height:150
          },
        
           
            
        }
      }]
      };
      return (
        <div id="piechart">
            <div className='piecharttext'>
          <p style={{fontWeight:700,color:"#000000",fontSize:"18px",marginLeft:"25px",marginTop:"20px"
}}>Top Products</p>
 <select style={{margin:"0",marginTop:"20px"}} value={selected} onChange={(event)=>{setSelected(event.target.value)
    
}
}>
    <option value="0">May - June 2021</option>
    <option value="1">June - July 2021</option>
  <option value="2">July - August 2021</option>

</select>
</div>
          <ReactApexChart options={options} series={series} type="pie" height={150}/>
        </div>
      );
    

}