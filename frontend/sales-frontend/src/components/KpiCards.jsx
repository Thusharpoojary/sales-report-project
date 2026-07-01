import { lazy } from "react";
const card ={
    background:'#1e293b',borderRadius:12,padding:'20px 28px',
    color:'#fff',flex:1,minWidth:180
};


export default function KpiCards({data}){
    if(!data) return null;
    const items=[
        {label:'Total Revenue',value:`$${Number(data.totalRevenue).toLocaleString(undefined,{maximumFractionDigits:0})}`},
        {label:'Total Profit', value:`$${Number(data.totalProfit).toLocaleString(undefined,{maximumFractionDigits:0})}`},
        {label:'Total Orders',value:data.totalOrders},
        {label:'Avg Order Value',value:`$${Number(data.avgOrderValue).toFixed(2)}`},
            ];

            return(
                <div style={{display:'flex',gap:16,flexWrap:'wrap',marginBottom:32}}>
                    {items.map(i=>(
                        <div key={i.label} style={card}>
                            <div style={{fontSize:13,color:'#94a3b8',marginBottom:6}}>{i.label}</div>
                            <div style={{fontSize:28,fontWeight:700}}>{i.value}</div>
                        </div>
                    ))}
                </div>
            );
}