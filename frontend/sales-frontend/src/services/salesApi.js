import axios from 'axios';

const BASE ='https://sales-report-project-1.onrender.com/api/sales';

export const getKpis=()=>axios.get(`${BASE}/kips`);
export const getByRegion=()=> axios.get(`${BASE}/by-region`);
export const getByCategory=()=>axios.get(`${BASE}/by-category`);
export const getBySalesRep=()=>axios.get(`${BASE}/by-sales-rep`);
export const getAllRecords=()=>axios.get(`${BASE}/all`)
