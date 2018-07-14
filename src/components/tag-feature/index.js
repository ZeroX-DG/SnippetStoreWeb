import React from "react";
import { Section, Heading, Paragraph, Box, Image, Button } from "grommet";

export default class TagFeature extends React.Component {
  render() {
    return (
      <Section style={{ background: "#f5f5f5" }}>
        <Box direction="row" style={{ padding: "50px 0" }}>
          <Box basis="1/2" pad="large">
            <Heading tag="h2">Tags support</Heading>
            <Paragraph style={{ lineHeight: "1.8em" }}>
              Tired of spending time finding your snippet? With Snippet Store,
              you can easily add tags to your snippets and retrieve them rapidly
              using the tag list in the left menu or directly enter the tag in
              the search bar.
            </Paragraph>
          </Box>
          <Box basis="1/2">
            <Image
              src="noframe-tag.png"
              fit="cover"
              style={{
                borderRadius: "5px",
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                boxShadow: "0 20px 30px rgba(0,0,0,0.5)"
              }}
            />
          </Box>
        </Box>
      </Section>
    );
  }
}
