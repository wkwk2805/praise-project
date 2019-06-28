import React, { useState } from "react";
import Layout from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import { changeHandler, submitHandler } from "../modules/lyrics";

// 가사 등록 컴포넌트
const Registration = () => {
  const datas = useSelector(state => state.lyrics);
  const dispatch = useDispatch();

  // 나중에 능력 될때 처리하자
  const tapEvent = e => {
    if (e.keyCode === 9) {
      e.preventDefault();
    }
  };

  // 값이 변경될 때마다 값에 대한 내용을 넣어줌
  const onChangeHandler = e => {
    dispatch(changeHandler(e));
  };

  // 들어온 값을 데이터 베이스로 넘기기
  const onSubmitHandler = () => {
    dispatch(submitHandler(datas));
  };
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
            name="title"
            onChange={onChangeHandler}
            style={{ margin: "20px 0px 15px 0px" }}
          />
          <select
            className="form-control"
            onChange={onChangeHandler}
            name="code"
          >
            <option value="">악보코드</option>
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
            name="contents"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="탭으로 TAG를 구분 해주세요"
            name="tag"
            onKeyDown={tapEvent}
            onChange={onChangeHandler}
          />
        </div>
        <input
          type="file"
          id="uploadFile"
          style={{ display: "none" }}
          name="img"
          onChange={onChangeHandler}
        />
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
        <div style={{ display: "inline-block", marginLeft: "10px" }}>
          <input
            type="text"
            className="form-control form-control-lg"
            readOnly
            style={{ backgroundColor: "white" }}
            placeholder="파일이름"
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={onSubmitHandler}
          >
            <span>등록</span> {` `}
            <i className="fas fa-plus-circle" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
