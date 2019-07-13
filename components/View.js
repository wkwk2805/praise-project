import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout";
import { contentsHandler, arrayHandler } from "../util/handler";

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
  const [lyrics, setLyrics] = useState(contentsHandler(data));
  const [list, setList] = useState({});
  useEffect(() => {
    setList(arrayHandler(lyrics)[0]);
    keyDownHandler();
    window.comunity = function(id) {
      let ls = arrayHandler(lyrics);
      setList(ls.filter(e => e.id === id)[0]);
    };
  }, []);
  const keyDownHandler = () => {
    window.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 38: // 위
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
