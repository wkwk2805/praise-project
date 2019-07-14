import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { contentsHandler, arrayHandler } from "../util/handler";

const styleSheet = {
  container: {
    background: "black",
    height: "1000px",
    color: "white",
    textAlign: "center",
    fontSize: "4em"
  },
  title: {
    fontSize: "1em",
    textAlign: "left",
    background: "black",
    color: "white",
    paddingTop: "15px",
    paddingLeft: "15px"
  }
};

const View = ({ data, initData }) => {
  const [lyrics, setLyrics] = useState(contentsHandler(data));
  const ls = arrayHandler(lyrics);
  const [list, setList] = useState(ls.filter(e => e.id === initData)[0]);
  useEffect(() => {
    keyDownHandler();
    window.comunity = function(id) {
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
      <div style={styleSheet.title}>{list.title}</div>
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
