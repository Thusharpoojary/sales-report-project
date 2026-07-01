import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend
} from 'recharts';

const COLORS = ['#6366f1','#22d3ee','#f59e0b','#10b981','#ef4444'];
const card = { background:'#1e293b', borderRadius:12, padding:20, marginBottom:24 };
const title = { color:'#fff', fontSize:16, fontWeight:600, marginBottom:16 };

export function RevenueByRegion({ data }) {
  return (
    <div style={card}>
      <div style={title}>Revenue by Region</div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155"/>
          <XAxis dataKey="name" stroke="#94a3b8"/>  {/* ✅ matches API */}
          <YAxis stroke="#94a3b8" tickFormatter={v => `$${(v/1000).toFixed(0)}k`}/>
          <Tooltip
            formatter={v => [`$${Number(v).toLocaleString()}`, 'Revenue']}
            contentStyle={{ background:'#1e293b', border:'1px solid #334155', borderRadius:8 }}
            labelStyle={{ color:'#fff' }}
          />
          <Bar dataKey="revenue" fill="#6366f1" radius={[6,6,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MonthlyTrend({ data }) {
  return (
    <div style={card}>
      <div style={title}>Monthly Revenue Trend</div>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155"/>
          <XAxis dataKey="month" stroke="#94a3b8"/>
          <YAxis stroke="#94a3b8"/>
          <Tooltip formatter={v => `$${v.toLocaleString()}`}/>
          <Line type="monotone" dataKey="revenue" stroke="#22d3ee" strokeWidth={2} dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CategoryPie({ data }) {
  return (
    <div style={card}>
      <div style={title}>Revenue by Category</div>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie data={data} dataKey="revenue" nameKey="label" outerRadius={90} label>
            {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)}
          </Pie>
          <Legend/>
          <Tooltip formatter={v => `$${v.toLocaleString()}`}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}