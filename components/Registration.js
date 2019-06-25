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
          <select className="form-control">
            <option selected>악보코드</option>
            <option value="C">C 코드</option>
            <option value="D">D 코드</option>
            <option value="E">E 코드</option>
            <option value="F">F 코드</option>
            <option value="G">G 코드</option>
            <option value="A">A 코드</option>
            <option value="B">B 코드</option>
          </select>
          <p />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="가사"
            className="form-control"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="탭으로 TAG를 구분 해주세요"
          />
        </div>
        <div class="form-group col-md-2" style={{ float: "left" }}>
          <input
            type="text"
            class="form-control form-control-lg"
            readOnly
            style={{ backgroundColor: "white" }}
            placeholder="파일이름"
          />
        </div>
        <input type="file" id="uploadFile" style={{ display: "none" }} />
        <button className="btn btn-info">
          <label
            htmlFor="uploadFile"
            style={{ cursor: "pointer", margin: "0px" }}
          >
            <i
              className="fas fa-upload"
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
            <div style={{ cursor: "pointer" }}>upload</div>
          </label>
        </button>

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
