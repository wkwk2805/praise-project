import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout";
import { contentsHandler, arrayHandler } from "../util/handler";

const styleSheet = {
  container: {
    background: "black",
    height: "1000px",
    color: "white",
    textAlign: "center",
    fontSize: "3.5em"
  },
  title: {
    fontSize: "1em",
    textAlign: "left",
    background: "black",
    color: "white",
    padding: "15px 0px 65px 15px"
  }
};

const View = ({ data, initData }) => {
  const targetRef = useRef();
  const [lyrics, setLyrics] = useState(contentsHandler(data));
  const ls = arrayHandler(lyrics);
  const [list, setList] = useState(ls.filter(e => e.id === initData)[0]);
  useEffect(() => {
    keyDownHandler();
    window.community = function(id) {
      setList(ls.filter(e => e.id === id)[0]);
    };
  }, []);
  const keyDownHandler = () => {
    window.addEventListener("keydown", e => {
      e.keyCode !== 122 && e.preventDefault();
      switch (e.keyCode) {
        case 38: // 위
          backMove();
          break;
        case 40: // 아래
          frontMove();
          break;
        case 37: // 왼
          backMove();
          break;
        case 39: // 오
          frontMove();
          break;
        case 13: //엔터
          frontMove();
          break;
        case 32: //스페이스
          frontMove();
          break;
        case 27: // esc
          window.close();
          break;
        default:
          break;
      }
    });
  };
  const frontMove = () => {
    let idxs = ls.map((e, i) => {
      if (e.id === targetRef.current.id) {
        return i;
      }
    });
    let idx = idxs.filter(e => e !== undefined)[0];
    if (list && list.title && list.id && idx + 1 !== ls.length) {
      let li = ls[idx + 1];
      setList(li);
      window.opener.communityMove(li.id);
    } else {
      alert("마지막 페이지 입니다.");
    }
  };
  const backMove = () => {
    let idxs = ls.map((e, i) => {
      if (e.id === targetRef.current.id) {
        return i;
      }
    });
    let idx = idxs.filter(e => e !== undefined)[0];
    if (list && list.title && list.id && idx - 1 !== -1) {
      let li = ls[idx - 1];
      setList(li);
      window.opener.communityMove(li.id);
    } else {
      alert("처음 페이지 입니다.");
    }
  };
  return (
    <Layout title="View">
      <div style={styleSheet.title}>{list.title}</div>
      <div style={styleSheet.container} id={list.id} ref={targetRef}>
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
