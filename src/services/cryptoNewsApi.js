import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders =  {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '72288b5985msh21878a8be39ef09p1b4806jsn65fe52b7e4dd',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }


  const baseUrl = 'https://bing-news-search1.p.rapidapi.com/'

const createRequest = (url) => ({url,headers:cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count}) => createRequest(`news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`), 
            
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi


