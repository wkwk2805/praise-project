import React from "react";
import Layout from "./Layout";

const CheckView = () => {
  return (
    <Layout title="Check View Page">
      <div className="container">
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
