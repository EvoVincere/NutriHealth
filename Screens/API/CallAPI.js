// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741
/*export const categories = [
    {
      code: "",
      pic: "https://img.icons8.com/fluent/96/000000/news.png",
      name: "general",
    },
    {
      code: "",
      pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
      name: "business",
    },
    {
      code: "",
      pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
      name: "entertainment",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
      name: "health",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
      name: "science",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
      name: "sports",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
      name: "technology",
    },
  ];
  
  export const country = [
    {
      code: "in",
      name: "India",
    },
    {
      code: "us",
      name: "USA",
    },
    {
      code: "au",
      name: "Australia",
    },
    {
      code: "ru",
      name: "Russia",
    },
    {
      code: "fr",
      name: "France",
    },
    {
      code: "gb",
      name: "United Kingdom",
    },
  ];
  
  export const sources = [
    {
      id: "bbc-news",
      name: "BBC News",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
    },
    {
      id: "cnn",
      name: "CNN",
      pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
    },
    {
      id: "fox-news",
      name: "Fox News",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
    },
    {
      id: "google-news",
      name: "Google News",
      pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
    },
  ];
  
  
  export const BASE_URL = "https://newsapi.org/v2";
  
  export const getNewsAPI = (category, country = "id") => {
    return `${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=d42886adebf0459b922206499ee20710`;
  };
  
  export const getSourceAPI = (source) => {
    return `${BASE_URL}/everything?domains=${source}&apiKey=d42886adebf0459b922206499ee20710`;
  };
  */

  

  const fetch = require("node-fetch");
  const fs = require('fs');
  const https = require('https');

  const params = {
    api_key : 'edqexgvpL2q6WENrwsekdxnF57Bhx0xZ55DfpjLl',
    query: 'carrot',
    dataType: ["Survey (FNDDS)"],
    pagesize: 5,
  }

  export const API_URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pagesize=${encodeURIComponent(params.pagesize)}`;

  export function getData() {
    return fetch(API_URL)
    .then(response => response.json())
  }

 // getData().then(data => console.log(data.foods[0].foodNutrients))