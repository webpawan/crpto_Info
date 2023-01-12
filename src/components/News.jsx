import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ simplified }) => {
  const [newsCategory, setnewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 8 : 100,
  });
  const { data } = useGetCryptosQuery(10);
  if (!cryptoNews?.value) {
    return <h1>loading..</h1>;
  }

  return (
    <>
      {!simplified && (
        <div className=" mx-auto text-center m-3">
          <select
            placeholder="select a crypto"
            className="mySelect"
            value={newsCategory}
            onChange={(e) => setnewsCategory(e.target.value)}
          >
            <option value="Cryptocurrency">Cryptocurrency</option>
            {data?.data?.coins.map((val) => {
              return (
                <option value={val.name} key={val.name}>
                  {val.name}
                </option>
              );
            })}
          </select>
        </div>
      )}

      <div className="container-fluid mx-auto">
        <div className="row">
          {cryptoNews?.value?.map((data, index) => {
            console.log();
            return (
              <div
                key={index}
                className="col-11 col-sm-6 col-md-4 col-lg-3 mx-auto m-1"
              >
                <div className="card p-2">
                  <div className="card-title">
                    <h4 className="heading">
                      {" "}
                      {data.name.length > 100
                        ? `${data.name.substring(0, 50)}...`
                        : data.name}
                    </h4>

                    <div className="d-flex justify-content-between my-2">
                      <p>
                        {data.description.length > 100
                          ? `${data.description.substring(0, 100)}...`
                          : data.description}
                      </p>

                      {data?.image?.thumbnail?.contentUrl ? (
                        <img
                          src={data?.image?.thumbnail.contentUrl}
                          className=""
                          style={{
                            height: `${data.image.thumbnail.height}`,
                            width: `${data.image.thumbnail.width}`,
                          }}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <a href={data.url} className="btn btn-outline-primary">
                      {" "}
                      read more
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

export default News;
