import React, { useState } from "react";
import { useSelector } from "react-redux";
import Registration from "../components/Registration";
import Home from "../components/Home";

const lyrics_registration = () => {
  const [admin, setAdmin] = useState(false);
  const setting = useSelector(state => state.lyrics);
  useEffect(() => {
    setAdmin(setting.result || false);
  }, [setting]);
  return <>{admin ? <Registration /> : <Home />}</>;
};

export default lyrics_registration;
