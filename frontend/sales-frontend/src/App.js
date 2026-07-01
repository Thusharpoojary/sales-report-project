import { useEffect, useState } from "react";


import { getAllRecords, getByCategory, getByRegion, getKpis } from "./services/salesApi";
import KpiCards from "./components/KpiCards";
import { CategoryPie, RevenueByRegion } from "./components/Charts";
import SalesTable from "./components/SalesTable";

export default function App(){
  const [kpis,setKpis]=useState(null);
  const [regions, setRegions]=useState([])
  const [categories,setCategories]=useState([])
  const [records, setRecords]=useState([])

  useEffect(()=>{
    getKpis().then(r=>setKpis(r.data));
    getByRegion().then(r=>setRegions(r.data));
    getByCategory().then(r=>setCategories(r.data));
    getAllRecords().then(r=>setRecords(r.data));
  },[]);
  return(
    <div style={{minHeight:'100vh',background:'#0f172a',padding:'32px',fontFamily:'Inter,sans-serif'}}>
      <h1 style={{color:'#fff',fontSize:24,fontWeight:700,marginBottom:28}}>
        Sales Analytics DashBoard
      </h1>
      <KpiCards data={kpis}/>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
        <RevenueByRegion data={regions}/>
        <CategoryPie data={categories}/>

      </div>
      <SalesTable data={records}/>
    </div>
  )
}