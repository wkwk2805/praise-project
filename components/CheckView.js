import React, { useEffect } from "react";
import Layout from "./Layout";
import Link from "next/link";
import { contentsHandler } from "../util/handler";
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "../modules/lyrics";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const CheckView = ({ data, id }) => {
  socket.on("lyrics_info1", data => {
    let choiceItem = document.getElementById(
      data["main"] + "#" + data["sub"] + "#" + data["id"]
    );
    choiceItem.classList.add("active");
  });
  const open_view = () => {
    open(
      "./lyrics_view?id=" + JSON.stringify(id),
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,width=1080,height=800"
    );
  };
  const change_data = e => {
    let obj = {};
    let id = e.target.id;
    if (id.indexOf("#") > -1) {
      let idArr = id.split("#");
      obj["main"] = idArr[0];
      obj["sub"] = idArr[1];
      obj["id"] = idArr[2];
    }
    // socket 통신을 활용해서 만들어야 겠다
    socket.emit("lyrics_info", obj);
    let cols = document.getElementsByClassName("col");
    for (let item of cols) {
      item.classList.remove("active");
    }
    document.getElementById(e.target.id).classList.add("active");
  };

  return (
    <Layout title="Check View Page">
      <div className="container">
        <div className="text-right" style={{ marginTop: "10px" }}>
          <Link href="/lyrics_list">
            <button className="btn btn-info">
              <span>HOME</span>
              {` `}
              <i className="fas fa-home" />
            </button>
          </Link>
          {` `}
          <button className="btn btn-success" onClick={open_view}>
            <span>SHOW VIEW</span>
            {` `}
            <i className="fas fa-search-plus" />
          </button>
          {` `}
          <button className="btn btn-danger">
            <span>DOWNLOAD PPT</span>
            {` `}
            <i className="fas fa-download" />
          </button>
        </div>
        <div className="table-container">
          {contentsHandler(data).map((e, idx) => {
            {
              return e.contents.map((item, i) => {
                return (
                  <div
                    className={idx === 0 && i === 0 ? "col active" : "col"}
                    key={i}
                    id={idx + "#" + i + "#" + e.id}
                    onClick={change_data}
                  >
                    <div
                      className="lyr-title"
                      key={i}
                      id={idx + "#" + i + "#" + e.id}
                    >
                      {e.title}
                    </div>
                    <div id={idx + "#" + i + "#" + e.id}>
                      {item.split("\n").map((it, i2) => (
                        <span key={i2} id={idx + "#" + i + "#" + e.id}>
                          {it}
                          <br />
                        </span>
                      ))}
                    </div>
                  </div>
                );
              });
            }
          })}
        </div>
      </div>
      <style jsx>
        {`
          .table-container {
            text-align: center;
            width: 100%;
          }
          .col {
            background: black;
            color: white;
            text-align: center;
            margin: 10px 10px 0px 0px;
            width: 20em;
            height: 300px;
            cursor: pointer;
            float: left;
          }
          .lyr-title {
            text-align: left;
            margin: 10px 0px 10px 5px;
            font-size: 10px;
          }
          .col:hover {
            border: solid 5px yellow;
          }
          .active {
            border: solid 5px yellow;
          }
        `}
      </style>
    </Layout>
  );
};

export default CheckView;
