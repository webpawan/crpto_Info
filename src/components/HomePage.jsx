import React from "react";
import { NavLink } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  
  // it is called Optional chaining (?.), and basically it will return unidentified instead of throwing an error

  // you can read more about it here
  // This is called "Optional chaining". Say you make an axios request and expect the response.data object. You don't KNOW if data will be there, but you expect it to. The question mark is a shorthand for writing data && data.name If data is undefined, the data.name code does not run and thus you don't get an error (cannot access name of undefined)

  const globalStats = data?.data?.stats;
console.log(globalStats);
 if(isFetching){
  return <h1> loading...</h1>
 }

 const { total, totalCoins, totalExchanges, totalMarketCap } = globalStats;

  return (
    <>
      <div className="container-fluid mx-auto bg-light">
        <div className="row mx-auto m-4">
          <div className="col-11 col-md-6 mx-auto text-center my-2">
            <h4 className="">Total - {total}</h4>
          </div>
          <div className="col-11 col-md-6 mx-auto text-center my-2">
            <h4>Total Coins - {totalCoins}</h4>
          </div>
          <div className="col-11 col-md-6 mx-auto text-center my-2">
            <h4>Total Exchange - {totalExchanges}</h4>
          </div>
          <div className="col-11 col-md-6 mx-auto text-center my-2">
            <h4>Total MarketCap - ${totalMarketCap}</h4>
          </div>
        </div>
      </div>
      <h1 className="mx-auto text-center heading mb-4">
        Top 10 Crypto currencies
      </h1>
      <Cryptocurrencies simplified />
<div className="mx-auto text-center">
<NavLink to='/cryptocurrencies'>click for more</NavLink>

</div>

      <News />
    </>
  );
};

export default HomePage;
