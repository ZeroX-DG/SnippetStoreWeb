import React from "react";
import Intro from "../components/intro";
import LongIntro from "../components/long-intro";
import TagFeature from "../components/tag-feature";
import LayoutFeature from "../components/layout-feature";
import ThemeFeature from "../components/theme-feature";
import TrayIcon from "../components/tray";
import Download from "../components/download";
import FooterSection from "../components/footer";
import MenuSection from "../components/menu";

export default class Index extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <MenuSection />
        <Intro />
        <LongIntro />
        <LayoutFeature />
        <ThemeFeature />
        <TagFeature />
        <TrayIcon />
        <Download />
        <FooterSection />
      </div>
    );
  }
}
