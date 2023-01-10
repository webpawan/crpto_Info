import React, { useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({simplified}) => {
const count = simplified ? 10 : 100;
const {data:cryptosList , isFetching} = useGetCryptosQuery(count);
// console.log(cryptosList?.data?.coins);
const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

if(isFetching) return  "loading.."
console.log(cryptos);
  return (
    <>
    <div className="container-fluid">
      <div className="row mx-auto">
        {cryptos?.map((data,index)=>{
         return <div className="col-11 col-sm-6 col-md-4 col-lg-3 mx-auto m-2"  key={data.uuid}>
          <div className={`card p-2`}>
<div className="d-flex align-items-center justify-content-between ">
  <h2>#{data.rank}</h2>
<blockquote class="blockquote text-center">
  <p class="">{data.name}</p>
  <footer class="blockquote-footer">{data.symbol}</footer>
</blockquote>
 
  <img src={data.iconUrl} alt="" className='img_container' />
</div>

<div className="card-body text-light"  style={{backgroundColor:`${data.color}`}}>
 
</div>
          </div>
        </div>
        })}
      </div>
    </div>
    </>
  )
}

export default Cryptocurrencies