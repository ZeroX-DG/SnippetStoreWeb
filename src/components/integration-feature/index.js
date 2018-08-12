import React from 'react'
import { Section, Heading, Box, Image, Columns } from 'grommet'

export default class IntegrationFeature extends React.Component {
  render() {
    return (
      <Section style={{ background: 'white' }}>
        <Heading tag="h2" align="center">
          Amazing integration plugins
        </Heading>
        <Columns justify='center'
          size='small'
          masonry={false}
          responsive={false}>
          <Box align='center'
            margin='small'
            style={{fontFamily: 'Lato', cursor: 'pointer'}}>
            <a
            href="https://marketplace.visualstudio.com/items?itemName=ZeroX-DG.vscode-snippetstore"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none' 
            }}>
              <Image src="vscode.png" style={{width: '100px'}} />
              Visual Studio Code
            </a>
          </Box>
        </Columns>
      </Section>
    )
  }
}
