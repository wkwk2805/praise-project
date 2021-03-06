import React, { useEffect } from "react";
import LyricsList from "../components/LyricsList";
import axios from "axios";
import host from "../util/hostname";

const lyrics_list = ({ data, param, admin }) => {
  useEffect(() => {
    if (data.length === 0) {
      alert("검색된 내용이 없습니다.");
    }
  }, []);
  return <LyricsList data={data} param={param} />;
};

// init
lyrics_list["getInitialProps"] = async ctx => {
  let param = encodeURI(ctx.query.value);
  const res = await (ctx.query.value
    ? axios.get(host + "/api/search?info=" + param)
    : axios.get(host + "/api"));
  return { data: res.data, param: param };
};

export default lyrics_list;
