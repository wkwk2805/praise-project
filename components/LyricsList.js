import React from "react";
import Layout from "./Layout";

const lyrics = [
  {
    l_id: 1,
    title: "title",
    lyr_img: "no_img.gif",
    contents: [
      {
        c_id: 1,
        statement: "안녕하세요\n저는 박의 입니다"
      },
      {
        c_id: 2,
        statement: "제 취미는요 코딩이에요"
      }
    ]
  },
  {
    l_id: 2,
    title: "title2",
    lyr_img: "no_img.gif",
    contents: [
      {
        c_id: 1,
        statement: "안녕하세요\n저는 박의2 입니다"
      },
      {
        c_id: 2,
        statement: "제 취미는요 코딩2이에요"
      }
    ]
  },
  {
    l_id: 3,
    title: "title2",
    lyr_img: "no_img.gif",
    contents: [
      {
        c_id: 1,
        statement: "안녕하세요\n저는 박의2 입니다"
      },
      {
        c_id: 2,
        statement: "제 취미는요 코딩2이에요"
      }
    ]
  },
  {
    l_id: 4,
    title: "title2",
    lyr_img: "no_img.gif",
    contents: [
      {
        c_id: 1,
        statement: "안녕하세요\n저는 박의2 입니다"
      },
      {
        c_id: 2,
        statement: "제 취미는요 코딩2이에요"
      }
    ]
  },
  {
    l_id: 5,
    title: "title2",
    lyr_img: "no_img.gif",
    contents: [
      {
        c_id: 1,
        statement: "안녕하세요\n저는 박의2 입니다"
      },
      {
        c_id: 2,
        statement: "제 취미는요 코딩2이에요"
      }
    ]
  },
  {
    l_id: 6,
    title: "title2",
    lyr_img: "no_img.gif",
    contents: [
      {
        c_id: 1,
        statement: "안녕하세요\n저는 박의2 입니다"
      },
      {
        c_id: 2,
        statement: "제 취미는요 코딩2이에요"
      }
    ]
  },
  {
    l_id: 7,
    title: "title2",
    lyr_img: "no_img.gif",
    contents: [
      {
        c_id: 1,
        statement: "안녕하세요\n저는 박의2 입니다"
      },
      {
        c_id: 2,
        statement: "제 취미는요 코딩2이에요"
      }
    ]
  }
];

const LyricsList = () => {
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
          <div class="row">
            <div class="col-sm-9">
              {lyrics.map(e => {
                return (
                  <div
                    className="card"
                    style={{
                      width: "16rem",
                      float: "left",
                      margin: "0px 10px 10px 0px"
                    }}
                  >
                    <img
                      src={`/static/${e.lyr_img}`}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <span>
                          <input
                            type="checkbox"
                            id={`title_${e.l_id}`}
                            style={{ width: "20px" }}
                          />
                          <label htmlFor={`title_${e.l_id}`}>{e.title}</label>
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
            <div className="col-sm-3">
              <h4 className="text-center">가사 제목</h4>
              <p />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Cras justo odio <i className="far fa-minus-square" />
                </li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <p />
              <div className="text-right">
                <button className="btn btn-success">PPT 만들기</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LyricsList;
