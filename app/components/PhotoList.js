import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: "https://s3gw.at.shab.cloud/production/houses/photos/2023/5/6/1/86752/house-86752-2023-05-11-03-42-38-359aed10da3a64061752e7a43dbe7a3ef55255c0-461162.jpg",
    title: "Photo 1",
    cols: 2,
    rows: 2,
  },
  {
    img: "https://s3gw.at.shab.cloud/production/houses/photos/2023/5/6/1/86752/house-86752-2023-05-11-03-42-34-359aed10da3a64061752e7a43dbe7a3ef55255c0-521434.jpg",
    title: "Photo 2",
    cols: 1,
    rows: 1,
  },
  {
    img: "https://s3gw.at.shab.cloud/production/houses/photos/2023/5/6/1/86752/house-86752-2023-05-11-03-42-35-359aed10da3a64061752e7a43dbe7a3ef55255c0-655164.jpg",
    title: "Photo 3",
    cols: 1,
    rows: 1,
  },
  {
    img: "https://s3gw.at.shab.cloud/production/houses/photos/2023/5/6/1/86752/house-86752-2023-05-11-03-42-37-359aed10da3a64061752e7a43dbe7a3ef55255c0-446019.jpg",
    title: "Photo 4",
    cols: 1,
    rows: 1,
  },
];

const PhotoListComponent = () => {
  return (
    <ImageList sx={{ width: "100%", height: "auto" }} variant="quilted" cols={4} rowHeight={180}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PhotoListComponent;
