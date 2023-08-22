export default function Schedule({schedules}){
    return<>
    {schedules&&
    <div className="schedule">
        <div className="schedule-header">
    <p style={{fontWeight:700,color:"#000000",fontSize:"18px",marginLeft:"20px"
}}>Today's Schedule</p>
<p style={{color:"#858585",fontSize:"12px"}} id="select2">See All <span>;&gt</span> </p>
</div>
<div className="schedulelist">
    <div className="scheduleitem">

    <div className="scheduleleft1">
    </div>
    <div className="scheduleright">
        <p style={{color:"#666666",fontSize:"14px"}}>{schedules[0].title}</p>
        <p style={{color:"#999999",fontSize:"12px"}}>{schedules[0].time}</p>
        <p style={{color:"#999999",fontSize:"12px"}}>{schedules[0].place}</p>
    </div>
    </div>
    <div className="scheduleitem">
        
        <div className="scheduleleft2">
        </div>
        
    <div className="scheduleright">
        <p style={{color:"#666666",fontSize:"14px"}}>{schedules[1].title}</p>
        <p style={{color:"#999999",fontSize:"12px"}}>{schedules[1].time}</p>
        <p style={{color:"#999999",fontSize:"12px"}}>{schedules[1].place}</p>
    </div>
        </div>

</div>
    </div>

}
    </>
}