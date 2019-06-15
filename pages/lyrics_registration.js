import React from "react";
import Registration from "../components/Registration";
import Head from "next/head";

const lyrics_registration = () => {
  return (
    <>
      <Head>
        <title>가사등록페이지</title>
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
      <Registration />;
    </>
  );
};

export default lyrics_registration;
