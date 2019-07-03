import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { selectData } from "../modules/sagas";
import axios from "axios";

const LyricsList = () => {
  const select = useSelector(state => state.select);
  const [lyrics, setLyrics] = useState([]);
  const [checked, setChecked] = useState([]);
  const dispatch = useDispatch();
  // init
  useEffect(() => {
    addEventListener("scroll", scrollHandler);
    getInitData();
  }, [select]);
  // init data
  const getInitData = () => {
    if (lyrics.length === 0) {
      axios
        .get("http://localhost:3001/api")
        .then(res => {
          setLyrics(res.data);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      select.map(e => setLyrics(lyrics.concat(e)));
    }
  };
  // scroll event
  const scrollHandler = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    // IE에서는 document.documentElement 를 사용.
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.
    if (scrollHeight - innerHeight - scrollTop < 100) {
      dispatch(selectData()); // 넣어준 값으로 다시 뿌려줄 준비하기
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
          code: val[1] !== "undefined" ? `(${val[1]})` : ``
        })
      );
    } else {
      const id = e.target.id;
      setChecked(checked.filter(el => el.id !== id));
    }
  };
  const removeChecked = (e, id) => {
    const el = document.getElementById(id);
    el.checked = false;
    e.target.parentElement && (e.target.parentElement.outerHTML = "");
  };
  return (
    <>
      <Layout title="가사목록페이지">
        <div className="container">
          <div
            className="input-group mb-3"
            style={{ margin: "20px 0px 0px 0px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="제목 또는 가사를 입력해 주세요"
            />
            <div className="input-group-append">
              <button className="input-group-text">
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
                          ? `http://localhost:3001/uploads/${e.file}`
                          : `./static/no_img.gif`
                      }
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <span>
                          <input
                            type="checkbox"
                            id={`title_${e.l_id}`}
                            value={e.title + "#" + e.code}
                            onChange={checkboxHandler}
                            style={{ width: "20px", cursor: "pointer" }}
                          />
                          <label
                            htmlFor={`title_${e.l_id}`}
                            style={{ cursor: "pointer" }}
                          >
                            {e.title + " " + (e.code ? `(${e.code})` : ``)}
                          </label>
                        </span>
                      </h5>
                      <p className="card-text">{e.contents[0].statement}</p>

                      <button
                        className="btn btn-primary"
                        style={{ float: "left" }}
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
                        style={{ verticalAlign: "center" }}
                      >
                        <input type="checkbox" id="check" />
                        {` `}
                        <label htmlFor="check">
                          {el.title + " " + el.code}
                        </label>
                        <i
                          className="fas fa-window-close"
                          style={{
                            color: "red",
                            cursor: "pointer",
                            float: "right",
                            fontSize: "20px"
                          }}
                          onClick={e => removeChecked(e, el.id)}
                        />
                      </li>
                    );
                  })}
                  {/* 반복끝 */}
                </ul>
                <p />
                <div className="text-center">
                  <Link href="/lyrics_check_view">
                    <button className="btn btn-success">PPT 생성</button>
                  </Link>
                  {` `}
                  <button className="btn btn-danger">PPT 제거</button>
                  <p />
                  <button className="btn btn-primary">악보다운로드</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LyricsList;
