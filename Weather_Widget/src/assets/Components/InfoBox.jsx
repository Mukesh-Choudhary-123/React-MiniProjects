import React from "react";
import Card from "@mui/material/Card";
import "./InfoBox.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const InfoBox = ({ info }) => {
  const URL_IMG =
    "https://www.salina.com/gcdn/authoring/2020/01/14/NSAJ/ghows-KS-9c1c6764-dc32-5196-e053-0100007ffdaf-9242f86b.jpeg?width=660&height=350&fit=crop&format=pjpg&auto=webp";

  const COLD_URL =
    "https://afar.brightspotcdn.com/dims4/default/057d48f/2147483647/strip/true/crop/1000x528+0+18/resize/527x278!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fdd%2F25%2F777f77444a85a017ef08abfd9358%2Fshutterstock-1012746709.jpg";
  const HOT_URL =
    "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/27114414/Summer-season-1024x576.jpg";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1565065524861-0be4646f450b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="info_box">
      <div className="card">
        <Card sx={{ maxWidth: 545 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}

              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp= {info.tempMin}</p>
              <p>Max Temp= {info.tempMax}</p>
              <p>The weather feels like = {info.feelslikes}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
