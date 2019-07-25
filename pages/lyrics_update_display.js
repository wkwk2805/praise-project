import React from "react";
import UpdateDisplay from "../components/UpdateDisplay";
import axios from "axios";
import host from "../util/hostname";

const lyrics_update_display = ({ lyrics }) => {
  return <UpdateDisplay lyrics={lyrics} />;
};

// 들어온 쿼리 id를 가지고 데이터를 부분적으로 불러와서 component에 넘겨주기
lyrics_update_display["getInitialProps"] = async req => {
  const res = await axios({
    url: `${host}/api/pre`,
    method: "patch",
    data: { id: req.query.id }
  });
  const lyrics = res.data;
  return { lyrics };
};

export default lyrics_update_display;
