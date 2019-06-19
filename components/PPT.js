import React from "react";
import PptxGenJS from "pptxgenjs";

const PPT = () => {
  const save = () => {
    let pptx = new PptxGenJS();
    pptx.setTitle("Hello world Title");
    pptx.setLayout({ name: "A3", width: 16.5, height: 11.7 });
    let slide = pptx.addNewSlide("MASTER");
    slide.back = "000000";
    slide.color = "FFFFFF";
    pptx.save(`가사모음_20190619`);
  };
  return <button onClick={save}>download ppt</button>;
};

export default PPT;
