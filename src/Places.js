import gallery from "./resources/gallery_2.png";

import { motion } from "framer-motion";
import BackButton from "./BackButton";
import { useState } from "react";
import ubud1 from "./resources/pictures/21_gynandha.jpg";
import balian1 from "./resources/pictures/22_balian-beach.jpg";
import tegalalang1 from "./resources/pictures/23_kecamatan.jpeg";
import gili1 from "./resources/pictures/24_gili_meno.jpg";
import acala1 from "./resources/pictures/25_acala.jpeg";
import deluxe1 from "./resources/pictures/26_deluxe.png";
import purnara1 from "./resources/pictures/27_purnara.jpg";

const Places = ({ onClose }) => {
  const [picturesOpen, setPicturesOpen] = useState(false);
  const [pictures, setPictures] = useState([]);

  const places = [
    { name: "Ubud", date: "május 2-6", days: 4, pictures: [ubud1] },
    { name: "Balian Beach", date: "május 6-8", days: 2, pictures: [balian1] },
    {
      name: "Kecamatan Tegalalang",
      date: "május 8-10",
      days: 2,
      pictures: [tegalalang1],
    },
    { name: "Gili Meno", date: "május 10-13", days: 3, pictures: [gili1] },
    {
      name: "Nusa Penida west",
      date: "május 13-14",
      days: 1,
      pictures: [acala1],
    },
    {
      name: "Nusa Penida east",
      date: "május 14-15",
      days: 1,
      pictures: [deluxe1],
    },
    { name: "Sukawati", date: "május 15-19", days: 4, pictures: [purnara1] },
  ];

  const openPictures = (pictures) => {
    setPicturesOpen(true);
    setPictures(pictures);
  };

  const closePictures = () => {
    setPicturesOpen(false);
    setPictures([]);
  };

  return (
    <>
      {picturesOpen && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <img src={pictures[0]} className="img" alt="" />
          <BackButton onClose={closePictures} />
        </motion.div>
      )}
      {!picturesOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            height: "100vh",
            width: "100%",
          }}
        >
          {places.map((place) => (
            <div className="place">
              <div style={{ marginRight: "50px" }}>
                <p
                  style={{ margin: "0px", textAlign: "left", color: "#ffffad" }}
                  className="fantasy-font"
                >
                  {place.name}
                </p>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      margin: "0px",
                      textAlign: "left",
                      color: "#000095",
                    }}
                  >
                    {place.date}
                  </p>
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      margin: "0px",
                      marginLeft: "50px",
                      textAlign: "left",
                      color: "#000095",
                    }}
                  >
                    {place.days + " nap"}
                  </p>
                </div>
              </div>
              <img
                src={gallery}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  cursor: "pointer",
                  margin: "auto",
                  marginRight: 0,
                }}
                alt=""
                onClick={() => openPictures(place.pictures)}
              ></img>
            </div>
          ))}

          <BackButton onClose={onClose} />
        </motion.div>
      )}
    </>
  );
};

export default Places;
