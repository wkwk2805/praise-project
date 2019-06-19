import React from "react";
import Layout from "./Layout";
import download_ppt from "../util/download_ppt";

const CheckView = () => {
  return (
    <Layout title="Check View Page">
      <div className="container">
        <div className="text-right" style={{ marginTop: "10px" }}>
          <button className="btn btn-danger" onClick={download_ppt}>
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
