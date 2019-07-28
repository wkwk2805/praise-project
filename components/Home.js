import React, { useState } from "react";
import Layout from "./Layout";
import Router from "next/router";
import Auth from "./Auth";

// list시 카드를 활용해서 하면 좋을듯
const Home = () => {
  const keyEvent = e => {
    switch (e.keyCode) {
      case 13:
        e.target.value
          ? Router.push(`/lyrics_list?value=${e.target.value}`)
          : alert("검색어를 입력해 주세요");
        return;
    }
  };
  return (
    <Layout>
      <div className="container">
        <Auth />
        <div
          className="input-group mb-3"
          style={{ margin: "190px 0px 0px 0px" }}
        >
          <h1 className="text-center">찬양 가사 검색</h1>
          <div
            className="input-group mb-3"
            style={{ margin: "10px 0px 0px 0px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="제목 또는 가사를 입력해 주세요"
              onKeyDown={keyEvent}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
