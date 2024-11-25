import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({ src, h5, p }) {
  return (
    <Card
      sx={{ maxWidth: 350 }}
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "2rem",
      }}
    >
      <img src={src} alt="img" style={{ paddingLeft: "5rem" }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {h5}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {p}
        </Typography>
      </CardContent>
    </Card>
  );
}
