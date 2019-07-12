import React, { useRef, useEffect, useState } from "react";
import View from "../components/View";
import axios from "axios";

const lyrics_view = ({ data }) => {
  return <View data={data} />;
};

// 들어온 쿼리 id를 가지고 데이터를 부분적으로 불러와서 component에 넘겨주기
lyrics_view["getInitialProps"] = async req => {
  const res = await axios.get(
    "http://localhost:3001/api/choice?id=" + req.query.id
  );
  return { data: res.data };
};

export default lyrics_view;
