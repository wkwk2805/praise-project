import React from "react";
import LyricsList from "../components/LyricsList";
import axios from "axios";

const lyrics_list = ({ data }) => {
  return <LyricsList data={data} />;
};

// init
lyrics_list["getInitialProps"] = async req => {
  let param = encodeURI(req.query.value);
  const res = await (req.query.value
    ? axios.get("http://localhost:3001/api/search?info=" + param)
    : axios.get("http://localhost:3001/api"));
  return { data: res.data };
};

export default lyrics_list;
