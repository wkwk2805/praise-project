import React from "react";
import Layout from "./Layout";

// list시 카드를 활용해서 하면 좋을듯
const Home = () => {
  const keyEvent = e => {
    switch (e.keyCode) {
      case 13:
        e.target.value && (window.location.href = "./lyrics_list");
        return;
    }
  };
  return (
    <Layout>
      <div className="container">
        <div
          className="input-group mb-3"
          style={{ margin: "200px 0px 0px 0px" }}
        >
          <h1 className="text-center">찬양 가사 검색 엔진</h1>
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
