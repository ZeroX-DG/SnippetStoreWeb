import React from 'react'
import { Section, Heading, Paragraph, Box, Image, Button } from 'grommet'

export default class Download extends React.Component {
  render() {
    return (
      <Section style={{ background: '#5f27cd', color: 'white' }} className='theme-feature' pad='large'>
        <Heading tag='h2' align='center'>Download - Free and always will be</Heading>
        <Box direction='column' align='center'>
          <Paragraph style={{ lineHeight: '1.8em', color: 'white' }}>
            As Snippet Store developer team only have 1 member, testing and building
            on multiple OSs is very difficult, therefore, SnippetStore only support
            Linux and Windows. However, OSX users can always build Snippet Store from source.
          </Paragraph>
          <Box>
          </Box>
        </Box>
      </Section>
    )
  }
}
