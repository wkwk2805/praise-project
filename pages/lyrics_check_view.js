import React from "react";
import CheckView from "../components/CheckView";
import axios from "axios";

const lyrics_check_view = ({ data, id }) => {
  return <CheckView data={data} id={id}/>;
};

// 들어온 쿼리 id를 가지고 데이터를 부분적으로 불러와서 component에 넘겨주기
lyrics_check_view["getInitialProps"] = async req => {
  const res = await axios.get(
    "http://localhost:3001/api/choice?id=" + JSON.stringify(req.query.id)
  );
  return { data: res.data, id:req.query.id };
};

export default lyrics_check_view;
