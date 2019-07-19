import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { selectData } from "../modules/sagas";
import axios from "axios";
import host from "../util/hostname";

const LyricsList = ({ data }) => {
  const select = useSelector(state => state.select);
  const [lyrics, setLyrics] = useState(data);
  const [checked, setChecked] = useState([]);
  const [result, setResult] = useState(false);
  const dispatch = useDispatch();

  // init
  useEffect(() => {
    console.log(host);
    let delta = 150;
    let timer = null;

    window.addEventListener(
      "scroll",
      function() {
        // resize 후 한번만 실행
        clearTimeout(timer);
        timer = setTimeout(scrollHandler, delta);
      },
      false
    );
    if (result && select.length === 0) {
      alert("검색된 내용이 없습니다");
    } else {
      setLyrics(select);
    }
  }, [select]);
  // scroll event
  const scrollHandler = async () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    // IE에서는 document.documentElement 를 사용.
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.
    if (scrollHeight - innerHeight - scrollTop < 100) {
      if (lyrics.length !== 0) {
        const res = await axios.get(
          `${host}/api/scroll?first=` + (lyrics.length - 1)
        );
        setLyrics(lyrics.concat(res.data));
      }
    }
  };
  // checkbox event
  const checkboxHandler = e => {
    if (e.target.checked) {
      const val = e.target.value.split("#");
      const id = e.target.id;
      setChecked(
        checked.concat({
          id: id,
          title: val[0],
          code: val[1] !== "undefined" ? `(${val[1]})` : ``,
          file: val[2] !== "undefined" ? val[2] : ``
        })
      );
    } else {
      const id = e.target.id;
      setChecked(checked.filter(el => el.id !== id));
    }
  };
  const removeChecked = id => {
    const el = document.getElementById(id);
    el.checked = false;
    setChecked(checked.filter(e2 => e2.id !== id));
  };
  const checkedList = () => {
    const id = checked.map(e => e.id.split("title_")[1] * 1);
    return id;
  };
  const downloadFile = name => {
    axios({
      url: `${host}/uploads/${name}`,
      method: "GET",
      responseType: "blob" // important
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", name);
      document.body.appendChild(link);
      link.click();
    });
  };
  const downloadFiles = () => {
    const li = checkedList().map(e => `id=${e}&`);
    if (!li || li.length === 0) {
      alert("다운로드 할 악보가 없습니다. 악보를 선택해 주세요");
      return;
    }
    //나중에는 zip파일로 다운받도록 만들어보자
    const files = checked.map(e => e.file);
    files.forEach(name => {
      downloadFile(name);
    });
  };
  const createPpt = () => {
    const li = checkedList().map(e => `id=${e}&`);
    if (!li || li.length === 0) {
      alert("PPT를 생성할 악보가 없습니다. 악보를 선택해 주세요");
      return;
    }
    let str = li.join("");
    str = str.substring(0, str.length - 1);
    Router.push("/lyrics_check_view?" + str);
  };
  const searching = async e => {
    if (e.keyCode === 13) {
      const res = await dispatch(selectData(encodeURI(e.target.value)));
      setResult(res ? true : false);
    } else if (!e.keyCode) {
      const res = await dispatch(selectData(encodeURI(e.target.value)));
      setResult(res ? true : false);
    }
  };
  return (
    <>
      <Layout title="가사목록페이지">
        <div className="container ">
          <div
            className="input-group mb-3"
            style={{ margin: "20px 0px 0px 0px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="제목 또는 가사를 입력해 주세요"
              onKeyDown={searching}
            />
            <div className="input-group-append">
              <button className="input-group-text" onClick={searching}>
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9">
              {lyrics.map(e => {
                return (
                  <div
                    key={e.l_id}
                    className="card"
                    style={{
                      width: "16rem",
                      float: "left",
                      margin: "0px 10px 10px 0px"
                    }}
                  >
                    <img
                      src={
                        e.file
                          ? `${host}/uploads/${e.file}`
                          : `./static/no_img.gif`
                      }
                      className="card-img-top"
                      style={{ maxHeight: "200px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <span>
                          <input
                            type="checkbox"
                            id={`title_${e.l_id}`}
                            value={e.title + "#" + e.code + "#" + e.file}
                            onChange={checkboxHandler}
                            style={{ width: "20px", cursor: "pointer" }}
                          />
                          <label
                            htmlFor={`title_${e.l_id}`}
                            style={{ cursor: "pointer" }}
                            className="txt_line_title"
                            title={
                              e.title + " " + (e.code ? `(${e.code})` : ``)
                            }
                          >
                            {e.title + " " + (e.code ? `(${e.code})` : ``)}
                          </label>
                        </span>
                      </h5>
                      <p className="card-text txt_line_content">
                        {e.contents[0].statement}
                      </p>

                      <button
                        className="btn btn-primary"
                        style={{ float: "left" }}
                        onClick={() => downloadFile(e.file)}
                      >
                        악보 다운로드
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ overflow: "auto" }}>
              <div
                className="col-sm-2 position-fixed border"
                style={{ padding: "15px" }}
              >
                <h4 className="text-center">가사 제목</h4>
                <p />
                <ul className="list-group list-group-flush">
                  {/* 반복시작 */}
                  {checked.map((el, i) => {
                    return (
                      <li
                        key={i}
                        className="list-group-item"
                        style={{
                          padding: "5px",
                          verticalAlign: "center",
                          fontSize: "12px"
                        }}
                      >
                        {el.title + " " + el.code}
                        <i
                          className="fas fa-window-close"
                          style={{
                            color: "red",
                            cursor: "pointer",
                            float: "right",
                            fontSize: "15px"
                          }}
                          onClick={() => removeChecked(el.id)}
                        />
                      </li>
                    );
                  })}
                  {/* 반복끝 */}
                </ul>
                <p />
                <div className="text-center">
                  <button className="btn btn-success" onClick={createPpt}>
                    PPT 생성
                  </button>
                  <p />
                  <button className="btn btn-primary" onClick={downloadFiles}>
                    악보다운로드
                  </button>
                </div>
              </div>
            </div>
          </div>
          <style jsx>
            {`
              .txt_line_content {
                width: 14em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .txt_line_title {
                width: 9em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-bottom: 0px;
              }
            `}
          </style>
        </div>
      </Layout>
    </>
  );
};

export default LyricsList;
