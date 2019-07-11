//import
import PptxGenJS from "pptxgenjs";

export const contentsHandler = data => {
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

// PPT 다운로드 함수
export const onDownloadPpt = () => {
  let pptx = new PptxGenJS();
  pptx.setTitle("Hello world Title");
  pptx.setLayout({ name: "A3", width: 16.5, height: 11.7 });
  let slide = pptx.addNewSlide("MASTER");
  slide.back = "000000";
  slide.color = "FFFFFF";
  pptx.save(`가사모음_20190619`);
  return "다운로드 성공";
};
