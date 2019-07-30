import React, { useState } from "react";
import Layout from "./Layout";
import Link from "next/link";
import { contentsHandler, onDownloadPpt, arrayHandler } from "../util/handler";

const CheckView = ({ data, id }) => {
  const [lists, setLists] = useState(contentsHandler(data));
  let openView;
  const open_view = () => {
    if (openView) openView.close();
    openView = open(
      "./lyrics_view?id=" +
        JSON.stringify(id) +
        "&init=" +
        document.getElementsByClassName("active")[0].id.replace(/#/g, "%23"),
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,width=1080,height=800"
    );
    window.communityMove = function(idx) {
      let cols = document.getElementsByClassName("col");
      for (let item of cols) {
        item.classList.remove("active");
      }
      document.getElementById(idx).classList.add("active");
    };
  };
  const change_data = e => {
    // class에서 active 제거 후 다시 넣어주기
    let cols = document.getElementsByClassName("col");
    for (let item of cols) {
      item.classList.remove("active");
    }
    document.getElementById(e.target.id).classList.add("active");
    if (openView && openView.community) {
      openView.community(e.target.id);
    }
  };
  const downloadPpt = () => {
    onDownloadPpt(arrayHandler(lists));
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
          <button className="btn btn-danger" onClick={downloadPpt}>
            <span>DOWNLOAD PPT</span>
            {` `}
            <i className="fas fa-download" />
          </button>
        </div>
        <div className="table-container">
          {lists.map((e, idx) => {
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
                    <div
                      id={idx + "#" + i + "#" + e.id}
                      className="lyr-contents"
                    >
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
            font-size: 7px;
          }
          .lyr-contents {
            font-size: 13px;
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
