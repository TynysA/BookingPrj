import Slider from "./Slider";

let t1 = "Поиск по типу размещения",
  t2 = "Казахстан — откройте для себя эту страну",
  t3 = "Куда вы хотите отправиться?",
  t4 = "Дома, которые нравятся гостям",
  t5 = "Пообщайтесь с другими путешественниками",
  st1 = "В этих популярных местах вы точно найдете что-то для себя";

let sliderDate = [
  { blockNumber: 6, imgNumber: 1, title: t1, subtitle: "" },
  { blockNumber: 6, imgNumber: 2, title: t2, subtitle: st1 },
  { blockNumber: 5, imgNumber: 4, title: t3, subtitle: "" },
  { blockNumber: 4, imgNumber: 5, title: t4, subtitle: "" },
  { blockNumber: 2, imgNumber: 6, title: t5, subtitle: "" },
  { blockNumber: 6, imgNumber: 1, title: t1, subtitle: "" },
];

function Main() {
  return (
    <div className="main">
      <div className="accommodation">
        <Slider sliderDate={sliderDate[0]}></Slider>
      </div>
      <div className="popular">
        <Slider sliderDate={sliderDate[1]}></Slider>
      </div>
      <div className="navigation">
        <Slider sliderDate={sliderDate[2]}></Slider>
      </div>
      <div className="houses">
        <Slider sliderDate={sliderDate[3]}></Slider>
      </div>
      <div className="blog">
        <Slider sliderDate={sliderDate[4]}></Slider>
      </div>
    </div>
  );
}

export default Main;
