import React, { Component } from "react";
import Headerbc from "./Headerbc";
import Subheaderbc from "./Subheaderbc";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import Row5 from "./Row5";
import Row6 from "./Row6";
import Row7 from "./Row7";
import Row8 from "./Row8";
import Row9 from "./Row9";
import Row10 from "./Row10";
import Row11 from "./Row11";
import Row12 from "./Row12";
import Row13 from "./Row13";
import Subheaderpme from "./Subheaderpme";
import Footerem from "./Footerem";
import Onfooterme from './Onfooterme'
import Tophead from "./Tophead";
import Navigationbc from './Navigationbc'


class Home extends Component {
  render() {
    return (
      <div>
        <Tophead/>
        <Headerbc />
        <Subheaderbc />
        <Navigationbc/>
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
        <Row6 />
        <Row7 />
        <Row8 />
        <Row9 />
        <Row10 />
        <Row11 />
        <Row12 />
        <Row13 />
        <Subheaderpme />
        <Onfooterme />
        <Footerem />
      </div>
    );
  }
}
export default Home;
