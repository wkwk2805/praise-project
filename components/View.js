import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout";
import { contentsHandler } from "../util/handler";

const styleSheet = {
  container: {
    background: "black",
    height: "1000px",
    color: "white",
    textAlign: "center",
    paddingTop: "30px",
    fontSize: "4em"
  }
};
const View = ({ data, change }) => {
  const [lyrics, setLyrics] = useState(contentsHandler(data));
  const [list, setList] = useState("a\nb");
  useEffect(() => {
    console.log(change);
  }, []);
  return (
    <Layout title="View">
      <div style={styleSheet.container}>
        {list.split("\n").map((it, i) => {
          return (
            <span key={i}>
              {it}
              <br />
            </span>
          );
        })}
      </div>
    </Layout>
  );
};

export default View;
