//import
import PptxGenJS from "pptxgenjs";

export const contentsHandler = data => {
  let l_id = data.map(e => e.l_id);
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
        } else if (
          i3 === splitArr.length - 1 &&
          (splitArr.length - 1) % 2 === 0
        ) {
          arr.push(str.substring(0, str.length - 1));
        }
      });
      array.push(arr);
      arr = [];
    });
    let obj = { id: l_id[i], title: title[i], contents: array };
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
export const onDownloadPpt = data => {
  // data 모양새는 [{id:'0#0#0', title:'요게뱃의 노래', contents:"동그란 눈으로\n엄말 보고 있는"},{},{}]
  let pptx = new PptxGenJS();
  pptx.setTitle("Hello world Title");
  pptx.setLayout({ name: "A3", width: 16.5, height: 11.7 });
  for (let item of data) {
    let slide = pptx.addNewSlide("MASTER");
    slide.back = "000000";
    slide.color = "FFFFFF";
    slide.addText(item.title, { fontSize: 15, h: 0.5 });
    slide.addText(item.contents, {
      fontSize: 65,
      align: "center",
      valign: "top",
      w: "80%",
      h: 2,
      y: 1,
      x: 1.5
    });
  }
  pptx.save(`가사모음` + new Date());
  return "다운로드 성공";
};

export const arrayHandler = lyrics => {
  let arr = [];
  lyrics.forEach((item, i) => {
    let arr2 = item.contents;
    arr2.forEach((item2, i2) => {
      let obj = {
        title: item.title,
        id: i + "#" + i2 + "#" + item.id,
        contents: item2
      };
      arr.push(obj);
    });
  });
  return arr;
};
