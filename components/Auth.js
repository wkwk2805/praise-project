import React, { useState } from "react";
import Axios from "axios";
import host from "../util/hostname";

const Auth = () => {
  const [admin, setAdmin] = useState(false);
  const [info, setInfo] = useState({});

  const changeHandler = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const login = async () => {
    const res = await Axios({
      url: `${host}/api/login`,
      data: info,
      method: "post",
      withCredentials: true
    });
    res.data.success && setAdmin(true);
  };

  const logout = () => {
    setAdmin(false);
  };
  return (
    <div style={{ marginTop: "10px", textAlign: "right" }}>
      <div className="form-inline justify-content-end">
        {admin || (
          <>
            <input
              className="form-control "
              type="text"
              placeholder="ID"
              name="id"
              onChange={changeHandler}
            />
            <input
              className="form-control"
              type="password"
              placeholder="password"
              style={{ marginLeft: "5px" }}
              name="password"
              onChange={changeHandler}
            />
          </>
        )}
        <button
          className="btn btn-success"
          onClick={admin ? logout : login}
          style={{ marginLeft: "5px" }}
        >
          {admin ? `Log-out` : `Log-in`}
        </button>
      </div>
    </div>
  );
};

export default Auth;
