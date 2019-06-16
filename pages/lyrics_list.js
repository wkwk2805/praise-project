import React from "react";
import LyricsList from "../components/LyricsList";
import Head from "next/head";

const lyrics_list = () => {
  return (
    <div>
      <Head>
        <title>가사목록페이지</title>
        {/* 부트스트랩 v4 */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        {/* Font Awesome에서 Icon 사용하기 */}
        <script src="https://kit.fontawesome.com/9607a2acfb.js" />
      </Head>
      <LyricsList />
    </div>
  );
};

export default lyrics_list;
