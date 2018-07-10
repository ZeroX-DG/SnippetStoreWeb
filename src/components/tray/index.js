import React from "react";
import { Section, Heading, Paragraph, Box, Image, Button } from "grommet";

export default class TrayIcon extends React.Component {
  render() {
    return (
      <Section style={{ background: "#f5f5f5" }}>
        <Box direction="row" pad="large">
          <Box basis="1/2" align="center" alignContent="center">
            <Image
              src="tray.png"
              style={{
                borderRadius: "5px",
                boxShadow: "0 20px 30px rgba(0,0,0,0.5)"
              }}
            />
          </Box>
          <Box basis="1/2" pad="large">
            <Heading tag="h2">Quickly access your snippets</Heading>
            <Paragraph style={{ lineHeight: "1.8em" }}>
              Fast and convenient is what Snippet Store want to provide to
              users; Therefore, from v0.2.1, tray icon is supported for quicker
              access to snippet list. With one click, Snippet Store will appear
              to save the day
            </Paragraph>
          </Box>
        </Box>
      </Section>
    );
  }
}
