import React from "react";
import Layout from "./Layout";

//가사 등록 컴포넌트
const Registration = () => {
  return (
    <Layout title="가사등록 페이지">
      <div className="container">
        <div className="form-group">
          <h5 className="text-center" style={{ margin: "20px 0px 0px 0px" }}>
            가사를 추가해 주세요
          </h5>
          <input
            type="text"
            placeholder="제목"
            className="form-control"
            style={{ margin: "20px 0px 15px 0px" }}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="20"
            placeholder="가사"
            className="form-control"
          />
        </div>
        <div className="text-right">
          <button className="btn btn-primary">
            <span>등록</span> {` `}
            <i className="fas fa-plus-circle" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
