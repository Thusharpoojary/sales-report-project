import React, { useState } from 'react';

export default function SalesTable({ data }) {
  const [search, setSearch] = useState('');
  const [page, setPage]     = useState(1);
  const pageSize = 10;

  const filtered = data.filter(r =>
    r.salesRep?.toLowerCase().includes(search.toLowerCase()) ||
    r.region?.toLowerCase().includes(search.toLowerCase()) ||
    r.productCategory?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / pageSize);
  const rows = filtered.slice((page - 1) * pageSize, page * pageSize);

  const th = { padding:'10px 14px', textAlign:'left', color:'#94a3b8',
               borderBottom:'1px solid #334155', fontSize:12 };
  const td = { padding:'10px 14px', color:'#e2e8f0', fontSize:13,
               borderBottom:'1px solid #1e293b' };

  return (
    <div style={{ background:'#1e293b', borderRadius:12, padding:20 }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:16 }}>
        <span style={{ color:'#fff', fontWeight:600 }}>All Transactions</span>
        <input
          placeholder="Search rep / region / category..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          style={{ background:'#0f172a', border:'1px solid #334155', borderRadius:8,
                   padding:'6px 12px', color:'#fff', width:260 }}
        />
      </div>
      <div style={{ overflowX:'auto' }}>
        <table style={{ width:'100%', borderCollapse:'collapse' }}>
          <thead>
            <tr>
              {['Date','Rep','Region','Category','Amount','Qty','Channel','Customer'].map(h =>
                <th key={h} style={th}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ background: i%2===0 ? '#1e293b' : '#162032' }}>
                <td style={td}>{r.saleDate}</td>
                <td style={td}>{r.salesRep}</td>
                <td style={td}>{r.region}</td>
                <td style={td}>{r.productCategory}</td>
                <td style={td}>${Number(r.salesAmount).toLocaleString()}</td>
                <td style={td}>{r.quantitySold}</td>
                <td style={td}>{r.salesChannel}</td>
                <td style={td}>{r.customerType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display:'flex', justifyContent:'flex-end', gap:8, marginTop:16 }}>
        <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page===1}
          style={{ background:'#334155', color:'#fff', border:'none',
                   borderRadius:6, padding:'6px 14px', cursor:'pointer' }}>← Prev</button>
        <span style={{ color:'#94a3b8', alignSelf:'center' }}>{page} / {totalPages}</span>
        <button onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page===totalPages}
          style={{ background:'#334155', color:'#fff', border:'none',
                   borderRadius:6, padding:'6px 14px', cursor:'pointer' }}>Next →</button>
      </div>
    </div>
  );
}