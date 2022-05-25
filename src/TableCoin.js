import React from 'react'

function TableCoin({data}) {
  return (
    <table>
    <thead>
        <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>ID</th>
        </tr>
    </thead>
    <tbody>
        {data.map((item)=>(
            <tr key={item.id}>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
                <td>{Math.round(item.price_usd)}</td>
                <td>{item.id}</td>
            </tr>
        ))}
    </tbody>
</table>
  )
}

export default TableCoin