import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";


const PhotoList = ({data}) => {    
  return (
    <ImageList sx={{ width: "100%", height: "auto" }} variant="quilted" cols={4} rowHeight={180}>
      {Object.values(data.image).map((imageUrl, index) => (
        <ImageListItem key={index} cols={imageUrl.cols || 1} rows={imageUrl.rows || 1}>
          <img src={imageUrl} alt={data.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PhotoList;
