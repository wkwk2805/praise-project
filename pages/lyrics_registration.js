import React, { useState } from "react";
import Registration from "../components/Registration";
import Home from "../components/Home";

const lyrics_registration = () => {
  const [admin, setAdmin] = useState(false);
  return <>{admin ? <Registration /> : <Home />}</>;
};

export default lyrics_registration;
