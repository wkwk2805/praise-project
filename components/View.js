import React, {useState, useEffect} from "react";
import Layout from "./Layout";

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
const View = ({data}) => {
  const contentsHandler = data => {
    let title = data.map(e => e.title);
    let contents = data.map(e => e.contents);
    let arrayFinal = [];
    contents.forEach((item, i) => {
      let array = [];
      let statementArr = item.map(e => e.statement);
      statementArr.forEach((item2, i2) => {
        let arr = [];
        let str = "";
        let splitArr = item2.split("\n");
        splitArr.forEach((item3, i3) => {
          str += item3 + "\n";
          if (i3 % 2 !== 0) {
            arr.push(str.substring(0, str.length - 1));
            str = "";
          }
        });
        array.push(arr);
        arr = [];
      });
      let obj = { title: title[i], contents: array };
      arrayFinal.push(obj);
    });
    arrayFinal.forEach(item => {
      let arr = [];
      item.contents.forEach(item2 => {
        arr = arr.concat(item2);
      });
      item.contents = arr;
    });
    return arrayFinal;
  };
  const [lyrics, setLyrics] = useState(contentsHandler(data));
  return (
    <Layout title="View">
      <div style={styleSheet.container}>View</div>
    </Layout>
  );
};

export default View;
