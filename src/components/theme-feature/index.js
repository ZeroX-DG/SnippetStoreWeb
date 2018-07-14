import React from "react";
import { Section, Heading, Paragraph, Box, Image, Button } from "grommet";
import "./theme.scss";

export default class ThemeFeature extends React.Component {
  render() {
    return (
      <Section className="theme-feature" pad="large">
        <Heading tag="h2" align="center">
          Choose your favorite theme
        </Heading>
        <Box direction="column" align="center">
          <Paragraph style={{ lineHeight: "1.8em" }}>
            Snippet Store provides 2 main themes: Dark and Light and a wide
            range of editor themes to fit your needs. Everything you need
            including your favorite themes is located in the setting modal which
            can be opened with the keyboard shortcut: ctrl + ,
          </Paragraph>
          <Box style={{ position: "relative" }}>
            <Image src="noframe-list-and-detail.png" fit="cover" />
            <Image
              className="clip"
              src="noframe-list-and-detail-dark.png"
              fit="cover"
            />
          </Box>
        </Box>
      </Section>
    );
  }
}
