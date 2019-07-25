import React, { useState, useEffect } from "react";
import Layout from "./Layout";

const UpdateDisplay = ({ lyrics }) => {
  const [info, setInfo] = useState(lyrics);
  const [contents, setContents] = useState("");
  const [fileName, setFileName] = useState(lyrics.file || "");
  useEffect(() => {
    setContents(
      info.contents
        .map(e => {
          return e.statement;
        })
        .join("\n\n")
    );
  }, []);
  // 값이 변경될 때마다 값에 대한 내용을 넣어줌
  const onChangeHandler = e => {
    switch (e.target.name) {
      case "file":
        setInfo({
          ...info,
          [e.target.name]: e.target.value.split(/\\/)[2],
          fileChange: fileName !== e.target.value.split(/\\/)[2]
        });
        break;
      case "contents":
        setContents(e.target.value);
        break;
      default:
        setInfo({ ...info, [e.target.name]: e.target.value });
        break;
    }
  };
  const _submit = () => {
    const data = { ...info, contents };
    console.log(data);
    for (key of data) {
      if (data[key] === "") {
        delete data[key];
      }
    }
  };
  return (
    <Layout title="가사수정 페이지">
      <div className="container">
        <div className="form-group">
          <h5 className="text-center" style={{ margin: "20px 0px 0px 0px" }}>
            가사를 수정해 주세요
          </h5>
          <input
            type="text"
            placeholder="제목"
            className="form-control"
            name="title"
            onChange={onChangeHandler}
            value={info.title && info.title}
            style={{ margin: "20px 0px 15px 0px" }}
          />
          <select
            className="form-control"
            onChange={onChangeHandler}
            name="code"
            value={info.code && info.code}
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
            value={contents && contents}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="탭으로 TAG를 구분 해주세요"
            name="tag"
            onChange={onChangeHandler}
            value={info.tag && info.tag}
          />
        </div>
        <input
          type="file"
          id="uploadFile"
          style={{ display: "none" }}
          name="file"
          onChange={onChangeHandler}
          accept="image/jpeg,image/gif,image/png"
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
            placeholder="악보이미지파일"
            value={info.file && info.file}
          />
        </div>
        <div className="text-right">
          <button className="btn btn-primary" onClick={_submit}>
            <span>등록</span> {` `}
            <i className="fas fa-plus-circle" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateDisplay;
