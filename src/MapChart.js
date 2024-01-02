import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

const markers = [
  { markerOffset: 15, name: "1. Ubud", coordinates: [-51, -22] },
  {
    markerOffset: 15,
    name: "2. Balian Beach",
    coordinates: [-68, -20],
  },
  { markerOffset: -30, name: "3.Tegalalang", coordinates: [-47, -20] },
  { markerOffset: 15, name: "4. Gili Meno", coordinates: [-18, -15] },
  {
    markerOffset: -30,
    name: "5. Nusa Penida",
    coordinates: [-38, -30],
  },
  {
    markerOffset: 15,
    name: "6. Nusa Penida",
    coordinates: [-30, -33],
  },
  { markerOffset: 10, name: "7. Sukawati", coordinates: [-49, -28] },
];

const MapChart = () => {
  return (
    <ComposableMap
      style={{
        position: "absolute",
        fontSize: 15,
        height: 1000,
        width: 1000,
        left: 0,
      }}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 400,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
