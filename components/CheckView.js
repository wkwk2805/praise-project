import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const CheckView = ({ data }) => {
  const open_view = () => {
    open(
      "./lyrics_view",
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,width=1080,height=800"
    );
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
          <button className="btn btn-danger">
            <span>DOWNLOAD PPT</span>
            {` `}
            <i className="fas fa-download" />
          </button>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="lyr-title">Hello</div>
            <div>world</div>
          </div>
          <div className="col-sm">
            <div className="lyr-title">Hello</div>
            <div>world</div>
          </div>
          <div className="col-sm">
            <div className="lyr-title">Hello</div>
            <div>world</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="lyr-title">Hello</div>
            <div>world</div>
          </div>
          <div className="col-sm">
            <div className="lyr-title">Hello</div>
            <div>world</div>
          </div>
          <div className="col-sm">
            <div className="lyr-title">Hello</div>
            <div>world</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="lyr-title">Hello</div>
            <div>world</div>
          </div>
          <div className="col-sm">
            <div className="lyr-title">Hello</div>
            <div>world</div>
          </div>
          <div className="col-sm">
            <div className="lyr-title">Hello</div>
            <div>world</div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .col-sm {
            background: black;
            color: white;
            text-align: center;
            margin: 10px 10px 0px 0px;
            width: 100px;
            height: 300px;
            cursor: pointer;
          }
          .lyr-title {
            text-align: left;
            margin: 10px 0px 0px 5px;
          }
          .col-sm:hover {
            border: solid 5px yellow;
          }
        `}
      </style>
    </Layout>
  );
};

export default CheckView;
