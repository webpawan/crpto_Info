import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  // console.log(cryptosList?.data?.coins);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

const filterData = cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
setCryptos(filterData)

  }, [cryptosList,searchTerm]);

  if (isFetching) return "loading..";

  return (
    <>
      <div className=" mx-auto text-center m-3">
        <input
          type="text"
          placeholder="search crypto "
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="container-fluid">
        <div className="row mx-auto">
          {cryptos?.map((data) => {
            return (
              <div
                className="col-11 col-sm-6 col-md-4 col-lg-3 mx-auto m-1"
                key={data.uuid}
              >
                <div className={`card p-2`}>
                  <div className="d-flex align-items-center justify-content-between ">
                    <h2>#{data.rank}</h2>
                    <blockquote className="blockquote text-center">
                      <p className="heading">{data.name}</p>
                      <footer className="blockquote-footer">
                        {data.symbol}
                      </footer>
                    </blockquote>

                    <img src={data.iconUrl} alt="" className="img_container" />
                  </div>

                  <div
                    className="card-body text-light  text-center"
                    style={{ backgroundColor: `${data.color}` }}
                  >
                    <div className="d-flex justify-content-arround align-items-center"></div>
                    <p className="mb-0">Price - ${data.price} [live]</p>
                    <p>Market capitalization - {data.marketCap}</p>
                    <a
                      className="MyCrypto_btn p-1 px-2 heading"
                      style={{ color: `${data.color}` }}
                      href={data.coinrankingUrl}
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cryptocurrencies;
