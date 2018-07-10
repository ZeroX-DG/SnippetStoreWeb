import React from "react";
import { Footer, Box, Paragraph, Menu, Anchor, Title } from "grommet";

export default class FooterSection extends React.Component {
  render() {
    return (
      <Footer justify="between">
        <Box pad="medium">
          <Paragraph margin="none">
            © 2018{" "}
            <Anchor href="https://github.com/ZeroX-DG">Nguyen Viet Hung</Anchor>
          </Paragraph>
        </Box>
        <Box direction="row" align="center" pad="medium">
          <Menu direction="row" size="small" dropAlign={{ right: "right" }}>
            <Anchor href="https://github.com/ZeroX-DG/SnippetStore">
              <i className="fa fa-github" /> Github
            </Anchor>
          </Menu>
        </Box>
      </Footer>
    );
  }
}
