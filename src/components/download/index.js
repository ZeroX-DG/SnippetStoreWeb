import React from "react";
import { Section, Heading, Paragraph, Box, Image, Button } from "grommet";
import "./download.scss";

export default class Download extends React.Component {
  render() {
    return (
      <Section
        style={{ background: "#5f27cd", color: "white" }}
        className="theme-feature"
        id="download"
        pad="large"
      >
        <Heading tag="h2" align="center">
          Download - Free and always will be
        </Heading>
        <Box direction="column" align="center">
          <Paragraph style={{ lineHeight: "1.8em", color: "white" }}>
            As Snippet Store developer team only have 1 member, testing and
            building on multiple OSs is very difficult, therefore, SnippetStore
            only support Linux and Windows. However, OSX users can always build
            Snippet Store from source.
          </Paragraph>
          <Box align="center" direction="row">
            <Button
              primary={true}
              href="https://github.com/ZeroX-DG/SnippetStore/releases/download/v0.2.1/Snippet.Store.Setup.0.2.1.exe"
              className="download-btn"
              pad="large"
              label={
                <div>
                  <i className="fa fa-windows" />&nbsp;Windows / 64bit
                </div>
              }
            />
            <Button
              className="download-btn"
              primary={true}
              label="Linux / 64bit"
              href="https://github.com/ZeroX-DG/SnippetStore/releases/download/v0.2.1/snippetstore_0.2.1_amd64.deb"
              label={
                <div>
                  <i className="fa fa-linux" />&nbsp;Linux / 64bit (.deb)
                </div>
              }
            />
            <Button
              className="download-btn"
              primary={true}
              label="Linux / 64bit"
              href="https://github.com/ZeroX-DG/SnippetStore/releases/download/v0.2.1/snippetstore-0.2.1-x86_64.AppImage"
              label={
                <div>
                  <i className="fa fa-linux" />&nbsp;Linux / 64bit (.AppImage)
                </div>
              }
            />
          </Box>
        </Box>
      </Section>
    );
  }
}
