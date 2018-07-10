import React from "react";
import { Menu, Header, Title, Box, Anchor, Section } from "grommet";
import Actions from "grommet/components/icons/base/Actions";

export default class MenuSection extends React.Component {
  render() {
    return (
      <Header fixed={true}>
        <Section
          style={{ width: "100%" }}
          direction="row"
          align="center"
          pad="medium"
        >
          <Box basis="1/2">
            <Anchor href="#intro" style={{ textDecoration: "none" }}>
              <Title>Snippet Store</Title>
            </Anchor>
          </Box>
          <Box align="end" basis="1/2">
            <Menu direction="row" size="small">
              <Anchor href="#download">Download</Anchor>
              <Anchor href="https://github.com/ZeroX-DG/SnippetStore">
                <i className="fa fa-github" /> Github
              </Anchor>
            </Menu>
          </Box>
        </Section>
      </Header>
    );
  }
}
