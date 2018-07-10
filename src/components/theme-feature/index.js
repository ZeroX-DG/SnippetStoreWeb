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
            Not only Snippet Store theme is customizable, it also provides a
            large number of editor themes to fit your needs and you can also
            customize the tag color in the interface setting modal. Currently,
            Snippet Store supports 2 themes: Dark and Light.
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
