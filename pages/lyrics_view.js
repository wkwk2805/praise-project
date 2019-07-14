import React from "react";
import View from "../components/View";
import axios from "axios";

const lyrics_view = props => {
  return <View data={props.data} initData={props.initData} />;
};

// 들어온 쿼리 id를 가지고 데이터를 부분적으로 불러와서 component에 넘겨주기
lyrics_view["getInitialProps"] = async req => {
  const res = await axios.get(
    "http://localhost:3001/api/choice?id=" + req.query.id
  );
  const initData = req.query.init.replace(/%23/g, "#");
  return { data: res.data, initData };
};

export default lyrics_view;
