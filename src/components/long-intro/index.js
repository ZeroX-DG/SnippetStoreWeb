import React from "react";
import { Section, Heading, Paragraph, Box, Image, Button } from "grommet";
import Download from "grommet/components/icons/base/Download";

export default class LongIntro extends React.Component {
  render() {
    return (
      <Section style={{ background: "#f5f5f5" }}>
        <Box direction="row" pad="large">
          <Box basis="1/2">
            <Heading tag="h2">Manage your snippets with ease</Heading>
            <Paragraph style={{ lineHeight: "1.8em" }}>
              Snippet Store support single and multi file snippet and wide range
              of programming languages; therefore, whether your snippet is a
              small function that you use from time to time or a whole design
              pattern that you need to remember, Snippet Store got you covered.
            </Paragraph>
            <Paragraph>
              <Button
                icon={<Download />}
                label="Download - Always free"
                primary={true}
                href="#download"
              />
            </Paragraph>
          </Box>
          <Box basis="1/2">
            <Image
              src="noframe.png"
              fit="cover"
              style={{
                borderRadius: "5px",
                boxShadow: "0 20px 30px rgba(0,0,0,0.5)"
              }}
            />
          </Box>
        </Box>
      </Section>
    );
  }
}
