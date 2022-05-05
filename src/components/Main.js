import Slider from "./Slider";
import data from "../Data_Base"

let t1 = "Поиск по типу размещения",
  t2 = "Казахстан — откройте для себя эту страну",
  t3 = "Куда вы хотите отправиться?",
  t4 = "Дома, которые нравятся гостям",
  t5 = "Пообщайтесь с другими путешественниками",
  st1 = "В этих популярных местах вы точно найдете что-то для себя";

let sliderDate = [
  { title: t1, subtitle: "" },
  { title: t2, subtitle: st1 },
  { title: t3, subtitle: "" },
  { title: t4, subtitle: "" },
  { title: t5, subtitle: "" },
  { title: t1, subtitle: "" },
];

function Main() {
  return (
    <div className="main">
      <div className="accommodation">
        <Slider dataBase={data.accommodation} sliderDate={sliderDate[0]}></Slider>
      </div>
      <div className="popular">
        <Slider dataBase={data.kz} sliderDate={sliderDate[1]}></Slider>
      </div>
      <div className="navigation">
        <Slider dataBase={data.navigation} sliderDate={sliderDate[2]}></Slider>
      </div>
      <div className="houses">
        <Slider dataBase={data.houses} sliderDate={sliderDate[3]}></Slider>
      </div>
      {/* <div className="blog">
        <Slider sliderDate={sliderDate[4]}></Slider>
      </div> */}
    </div>
  );
}

export default Main;
