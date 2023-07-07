import { HdrEnhancedSelectSharp } from "@mui/icons-material";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export const Weather = () => {
  const key = "52741d2a3e78b22d22cfd32645f386de";
  const [city1, setCity1] = useState("Dehradun");
  const [city2, setCity2] = useState("Dehradun");
  const [data, setData] = useState({
    name: "Dehradun",
    main: {
      temp: 273,
      temp_max: 273,
      temp_min: 273,
      humidity: 20,
      feels_like: 273,
    },
    weather: [
      {
        description: "Sunny",
      },
    ],
  });
  const [backImg, setbackImg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/employee-management-syst-c4d72.appspot.com/o/day_image.svg?alt=media&token=e46671ff-707a-413e-9e23-62ec97102dd9"
  );
  useEffect(() => {
    const requestCity = async (city) => {
      const baseURL = "https://api.openweathermap.org/data/2.5/weather";
      const query = `?q=${city}&appid=${key}`;
      const response = await axios.get(baseURL + query);
      setData(response.data);
      //console.log(data);
    };
    requestCity(city2);
  }, [city2]);

  const styles = {
    container: {
      backgroundColor: "lightblue",
      padding: "20px",
    },
    body: {
      fontFamily: "Raleway",
      background: "#e0e0e0",
      color: "#707070",
      margin: "0",
      padding: "0",
    },
    container: {
      maxWidth: "400px",
      minWidth: "400px",
    },
    title: {
      fontWeight: 700,
      fontSize: "50px",
    },
    formRounded: {
      borderRadius: "2em",
    },
    backCard: {
      borderRadius: "40px",
    },
    cityName: {
      position: "absolute",
      width: "100%",
    },
    // city-name p: {
    //   fontSize: "16pt",
    //   fontWeight: 400
    // },
    citynameSpan: {
      fontWeight: 400,
      fontSize: "36pt",
      fontFamily: "'Times New Roman', Times, serif",
      position: "relative",
      top: "-60px",
    },
    tempSpan: {
      fontWeight: 100,
      fontSize: "5em",
      letterSpacing: "-5px",
      whiteSpace: "nowrap",
      marginTop: "60px",
    },
    cardmid: {
      lineHeight: 0.5,
    },
    condition: {
      lineHeight: "1em",
      fontWeight: 700,
      fontSize: "1em",
      textTransform: "capitalize",
    },
    highBeforeStyles: {
      content: `url("img/up.svg")`,
      width: "10px",
      height: "15px",
      display: "inline-block",
      position: "relative",
      top: "3px",
    },
    lowBeforeStyles: {
      content: `url("img/down.svg ")`,
      width: "10px",
      height: "15px",
      display: "inline-block",
      position: "relative",
      top: "3px",
    },
    iconContainer: {
      borderRadius: "100%",
      width: "100px",
      height: "100px",
      background: "#202020",
    },
    iconContainerImg: {
      margin: "auto",
    },
    cardBottom: {
      lineHeight: 0.5,
    },
    cardbottomspan: {
      fontSize: "12px",
    },
    cardbottomp: {
      fontSize: "50px",
      fontWeight: 100,
      letterSpacing: "-2px",
    },
  };
  const handleChange = (event) => {
    setCity1(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCity2(city1);
  };
  setTimeout(() => {
    console.log(data);
  }, 3000);
  useEffect(() => {
    if (data?.weather[0]?.icon?.includes("d")) {
      setbackImg(
        "https://firebasestorage.googleapis.com/v0/b/employee-management-syst-c4d72.appspot.com/o/day_image.svg?alt=media&token=e46671ff-707a-413e-9e23-62ec97102dd9"
      );
    } else {
      setbackImg(
        "https://firebasestorage.googleapis.com/v0/b/employee-management-syst-c4d72.appspot.com/o/night_image.svg?alt=media&token=fc708e95-ed18-4753-8fe0-f5ce0d9b30d4"
      );
    }
  }, [city2]);

  return (
    <div>
      <body style={styles.body} className="weather ">
        <div style={styles.container} className="container my-5">
          <h1 className="text-center title">Weather in</h1>
          <form className="search-location" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Input City!!"
              name="city"
              className="form-control text-muted form-rounded p-4 shadow-sm"
              style={styles.formRounded}
              onChange={handleChange}
            />
          </form>
          <div
            style={styles.backCard}
            className="card rounded my-3 shadow-lg back-card"
          >
            <div className="card-top text-center">
              <div style={styles.cityName} className="city-name my-3">
                <h3>{data.name}</h3>
                <span style={styles.citynameSpan}>...</span>
              </div>
              <img
                src={backImg}
                //src={require("./img/night_image.svg").default}
                alt=""
                className="card-img-top time"
              />
            </div>

            <div className="card-body">
              <div style={styles.cardmid} className="card-mid row">
                <div style={styles.tempSpan} className="col-8 text-center temp">
                  <span>{Math.round(data?.main?.temp - 273.15)}&deg;C</span>
                </div>
                <div className="col condition-temp">
                  <p style={styles.condition} className="condition">
                    {data.weather[0].description}
                  </p>
                  <div>
                    <p>Max Temp</p>
                    <p>{Math.round(data?.main?.temp_max - 273.15)}&deg;C</p>
                    {/* <p style={styles.highBeforeStyles} className="high">
                      30&deg;C
                    </p> */}
                  </div>
                  <div>
                    <p>Min Temp</p>
                    <p>{Math.round(data?.main?.temp_min - 273.15)}&deg;C</p>
                    {/* <p style={styles.lowBeforeStyles} className="low">
                      27&deg;C
                    </p> */}
                  </div>
                </div>
              </div>
              <div
                style={styles.iconContainer}
                className="icon-container card mx-auto"
              >
                <img
                  style={styles.iconContainerImg}
                  src={require("./img/cloud.svg").default}
                />
              </div>
              <div
                style={styles.cardBottom}
                className="card-bottom px-5 py-4 row"
              >
                <div className="col text-center">
                  <p style={styles.cardbottomp}>
                    {Math.round(data?.main?.feels_like - 273.15)}&deg;C
                  </p>
                  <span style={styles.cardbottomspan}>Feels Like</span>
                </div>
                <div className="col text-center">
                  <p style={styles.cardbottomp}>{data?.main?.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="map.js"></script>
        <script src="request.js"></script>
        <script src="index.js"></script>
      </body>
    </div>
  );
};
