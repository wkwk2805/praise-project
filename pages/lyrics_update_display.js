import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UpdateDisplay from "../components/UpdateDisplay";
import axios from "axios";
import host from "../util/hostname";
import Home from "../components/Home";

const lyrics_update_display = ({ lyrics }) => {
  const setting = useSelector(state => state.lyrics);
  useEffect(() => {
    setAdmin(setting.result || false);
  }, [setting]);
  const [admin, setAdmin] = useState(false);
  return <>{true ? <UpdateDisplay lyrics={lyrics} /> : <Home />}</>;
};

// 들어온 쿼리 id를 가지고 데이터를 부분적으로 불러와서 component에 넘겨주기
lyrics_update_display["getInitialProps"] = async req => {
  const res = await axios({
    url: `${host}/api/pre`,
    method: "patch",
    data: { id: req.query.id }
  });
  const lyrics = res.data;
  lyrics["preFile"] = res.data.file;
  return { lyrics };
};

export default lyrics_update_display;
