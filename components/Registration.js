import React from "react";

//가사 등록 컴포넌트
const Registration = () => {
  return (
    <div className="container">
      <div className="form-group">
        <input type="text" placeholder="Title" className="form-control" />
        <div style={{ margin: "10px", border: "1px" }} />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Lyrics"
          className="form-control"
        />
      </div>
      <button>
        <i class="fas fa-plus-circle" />
      </button>
    </div>
  );
};

export default Registration;
