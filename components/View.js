import React from "react";
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
const View = () => {
  return (
    <Layout title="View">
      <div style={styleSheet.container}>View</div>
    </Layout>
  );
};

export default View;
