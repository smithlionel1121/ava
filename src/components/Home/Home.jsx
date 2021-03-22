import React, { Fragment } from "react";

import Content from "./Content/Content";
import SimpleSwiper from "./Carousel/Carousel";
import BulkContent from "./BulkContent/BulkContent";

export default function Home() {
  return (
    <Fragment>
      <SimpleSwiper />
      <Content contentImage="office-background" />
      <Content backgroundImage="sunglasses-2-background" />
      <BulkContent />
    </Fragment>
  );
}
