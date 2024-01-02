import comingSoon from "./resources/coming-soon.png";

const PICTURES_2_DATE = new Date("2024-01-05T00:00:01");
const PICTURES_3_DATE = new Date("2024-04-01T00:00:01");

const ComingSoon = ({ date }) => {
  const formatter = new Intl.DateTimeFormat("hu", {
    month: "long",
    day: "2-digit",
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h3 className="fantasy-font" style={{ margin: "0px" }}>
          ÚJ KÉPEK
        </h3>
        <p style={{ margin: "5px", fontFamily: "Monsterrat" }}>
          {formatter.format(date)}
        </p>
      </div>
      <img
        src={comingSoon}
        style={{
          width: "60px",
          height: "60px",
          marginRight: "20px",
          marginLeft: "20px",
        }}
        alt=""
      ></img>
    </div>
  );
};

const NewPictures = ({ onOpenSlideshow1, onOpenSlideshow2 }) => {
  const date = new Date();

  if (date < PICTURES_2_DATE) {
    return (
      <>
        <ComingSoon date={PICTURES_2_DATE} />
      </>
    );
  } else if (date < PICTURES_3_DATE) {
    return (
      <>
        <h2
          className="button button-bordered fantasy-font"
          onClick={onOpenSlideshow1}
        >
          Képek 2
        </h2>
        <ComingSoon date={PICTURES_3_DATE} />
      </>
    );
  } else {
    return (
      <>
        <h2
          className="button button-bordered fantasy-font"
          onClick={onOpenSlideshow1}
        >
          Képek 1
        </h2>
        <h2
          className="button button-bordered fantasy-font"
          onClick={onOpenSlideshow2}
        >
          Képek 3
        </h2>
      </>
    );
  }
};

export default NewPictures;
