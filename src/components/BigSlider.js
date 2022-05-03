import "./BigSlider.css";

function BigSlider() {
  return (
    <div className="slider">
      <div className="title"></div>
      <div className="slider__inner">
        <SliderBlock></SliderBlock>
        <SliderBlock></SliderBlock>
      </div>
    </div>
  );
}
function SliderBlock() {
  return (
    <div className="slider__block">
      <img className="slider__img" src="" alt="" />
      <div className="slider__info">
        <div className="slider__title"></div>
        <div className="slider__info"></div>{" "}
      </div>
    </div>
  );
}
export default BigSlider;
