import "./Slider.css";
import i1 from "../img/1.webp";
import i2 from "../img/2.webp";
import i3 from "../img/3.webp";
import i4 from "../img/4.jpeg";
import i5 from "../img/5.jpeg";
import i6 from "../img/6.jpeg";

let img;
let some;
function Slider(props) {
  switch (props.sliderDate.imgNumber) {
    case 1:
      img = i2;
      break;
    case 2:
      img = i3;
      break;
    case 3:
      img = i4;
      break;
    case 4:
      img = i5;
      break;
    case 5:
      img = i4;
      break;
    case 6:
      img = i6;
      break;
    default:
      img = i2;
      break;
  }
  switch (props.sliderDate.blockNumber) {
    case 1:
      some = (
        <div className="slider__inner">
          <SliderBlock></SliderBlock>
        </div>
      );
      break;
    case 2:
      some = (
        <div className="slider__inner">
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
        </div>
      );
      break;
    case 3:
      some = (
        <div className="slider__inner">
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
        </div>
      );
      break;
    case 4:
      some = (
        <div className="slider__inner">
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
        </div>
      );
      break;
    case 5:
      some = (
        <div className="slider__inner">
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
        </div>
      );
      break;
    case 6:
      some = (
        <div className="slider__inner">
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
          <SliderBlock></SliderBlock>
        </div>
      );
      break;
    default:
      some = <div className="slider__inner"></div>;
      break;
  }

  return (
    <div className="slider">
      <div className="container">
        <div className="title">{props.sliderDate.title}</div>
        <div className="sub__title">{props.sliderDate.subtitle}</div>
        {some}
      </div>
    </div>
  );
}

function SliderBlock() {
  return (
    <a href="" className="slider__block-link">
      <div className="slider__block">
        <a href="" className="slider__link">
          <div className="slider__image">
            <img src={img} alt="" className="slider__img" />
            <div className="slider__scrim">
              <div className="scrim__title">Loremmm</div>
              <div className="scrim__text"></div>
            </div>
          </div>
        </a>
        <div className="slider__content">
          <a href="" className="slider__title">
            Lorem
          </a>
          <div className="slider__info">
            <span className="slider__number">877 555 </span>
            <span className="slider__text">
              Lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Slider;
