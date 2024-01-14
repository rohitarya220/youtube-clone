import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com/auto-complete/";

const options = {
    params: {
        q: 'desp',
        hl: 'en',
        gl: 'US'
      },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios?.get(`${BASE_URL}search/${url}`, options);
    return response?.data;
  } catch (error) {
    console.error("Error fetching data from YouTube API:", error);
    throw error;
  }
};
