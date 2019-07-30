import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import host from "../util/hostname";
import { lognHandler } from "../modules/lyrics";

const Auth = () => {
  const loginResult = useSelector(state => state.lyrics);
  const dispatch = useDispatch();
  useEffect(() => {
    setAdmin(loginResult.result);
  }, [loginResult]);
  const [admin, setAdmin] = useState(loginResult.result || false);
  const [info, setInfo] = useState({});

  const changeHandler = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const login = async () => {
    const res = await axios({
      url: `${host}/api/login`,
      data: info,
      method: "post",
      withCredentials: true
    });
    if (res.data.success) {
      dispatch(lognHandler(res.data.success));
    } else {
      alert("아이디와 비밀번호가 맞지 않습니다.");
    }
  };

  const logout = () => {
    window.location.reload();
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
