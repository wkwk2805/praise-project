import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout";
import { contentsHandler, arrayHandler } from "../util/handler";
import io from "socket.io-client";

const styleSheet = {
  container: {
    background: "black",
    height: "1000px",
    color: "white",
    textAlign: "center",
    paddingTop: "30px",
    fontSize: "4em"
  }
};

const View = ({ data }) => {
  const socket = io("http://localhost:3001");
  const [lyrics, setLyrics] = useState(contentsHandler(data));
  const [mainNum, setMainNum] = useState(0);
  const [subNum, setSubNum] = useState(0);
  const [list, setList] = useState({});
  socket.on("lyrics_info", info => {
    if (lyrics[info.main * 1].id * 1 === info.id * 1) {
    }
  });
  useEffect(() => {
    setList(arrayHandler(lyrics)[0]);
    test();
  }, []);

  const test = () => {
    window.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 38: // 위
          setList(lyrics[0].contents[1]);
          break;
        case 40: // 아래
          break;
        case 37: // 왼
          break;
        case 39: // 오
          break;
        case 13: //엔터
          break;
        case 32: //스페이스
          break;
        case 27: // esc
          break;
        default:
          break;
      }
    });
  };
  return (
    <Layout title="View">
      <div style={styleSheet.container}>
        {(list.contents + "").split("\n").map((it, i) => {
          return (
            <span key={i}>
              {it}
              <br />
            </span>
          );
        })}
      </div>
    </Layout>
  );
};

export default View;
