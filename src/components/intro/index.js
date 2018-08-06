import React from "react";
import { Hero, Paragraph, Box, Heading, Image } from "grommet";
import axios from "axios";

export default class Intro extends React.Component {
  render() {
    return (
      <Hero size="large" id="intro">
        <Box direction="row" justify="center" align="center">
          <Box basis="1/2" align="end" pad="medium">
            <Image src="icon512.png" />
          </Box>
          <Box basis="1/2" align="start" pad="medium">
            <Heading margin="none" style={{ fontFamily: "Lato" }}>
              Snippet Store
              <Paragraph size="large">
                A snippet management app for developers
              </Paragraph>
              <Paragraph size="large">
                v0.2.5 -{" "}
                <a href="https://github.com/ZeroX-DG/SnippetStore/blob/master/CHANGELOG.md">
                  Changelog
                </a>
              </Paragraph>
            </Heading>
          </Box>
        </Box>
      </Hero>
    );
  }
}
