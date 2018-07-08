import React from 'react'
import { Section, Heading, Paragraph, Box, Image, Button } from 'grommet'

export default class EncodeFeature extends React.Component {
  render() {
    return (
      <Section style={{ background: '#f5f5f5' }}>
        <Box direction='row' pad='large'>
          <Box basis='1/2'>
            <Image
              src='noframe-tag.png'
              fit='cover'
              style={{
                borderRadius: '5px',
                boxShadow: '0 20px 30px rgba(0,0,0,0.5)'
              }} />
          </Box>
          <Box basis='1/2' pad='large'>
            <Heading tag='h2'>Your secrets are safe with us</Heading>
            <Paragraph style={{ lineHeight: '1.8em' }}>
              Security is very important to Snippet Store developer team which
              is currently only have one member - me&nbsp;
              <Image src='cl-face.png' style={{ width: '1.5em' }} />. Therefore,
              from v0.2.1, you can encrypt your snippets with your own trusted password.
            </Paragraph>
          </Box>
        </Box>
      </Section>
    )
  }
}
