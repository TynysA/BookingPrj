import "./Slider.css";

function Slider(props) {
  let arr = props.dataBase;
  return (
    <div className="slider">
      <div className="container">
        <div className="title">{props.sliderDate.title}</div>
        <div className="sub__title">{props.sliderDate.subtitle}</div>
        <div className="slider__inner">
          {arr.map((block) => (
            <a href="" className="slider__block-link">
              <div className="slider__block">
                <div className="slider__image">
                  <img src={block.img_url} alt="" className="slider__img" />
                  <div className="slider__scrim">
                    <div className="scrim__title">{block.title}</div>
                    <div className="scrim__text">{block.subtitle}</div>
                  </div>
                </div>

                <div className="slider__content">
                  <div className="slider__title">{block.title}</div>
                  <div className="slider__info">
                    <span className="slider__text">{block.subtitle}</span>
                  </div>
                  <div className="extra__info">
                    <p>{block.price}</p>
                    <div>{block.mark}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Slider;
