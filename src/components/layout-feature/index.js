import React from 'react'
import { Section, Heading, Paragraph, Box, Image, Button } from 'grommet'

export default class LayoutFeature extends React.Component {
  render() {
    return (
      <Section style={{ background: '#f5f5f5' }}>
        <Box direction='row' pad='large'>
          <Box basis='1/2' style={{ position: 'relative' }}>
            <Image
              src='noframe-original.png'
              size='large'
              style={{
                borderRadius: '5px',
                boxShadow: '0 20px 30px rgba(0,0,0,0.5)'
              }} />
            <Image
              src='noframe-list-and-detail.png'
              size='large'
              style={{
                position: 'absolute',
                left: '10%',
                top: '40%',
                borderRadius: '5px',
                boxShadow: '0 20px 30px rgba(0,0,0,0.5)'
              }} />
          </Box>
          <Box basis='1/2' pad='large'>
            <Heading tag='h2'>Use your favorite layout</Heading>
            <Paragraph style={{ lineHeight: '1.8em' }}>
              Whether if you're storing your snippets only for later retrieval
              and doesn't really care about the details or if you're a programming learner
              and need to store your snippets with all the information on how those snipppets
              work, SnippetStore got your back!
            </Paragraph>
            <Paragraph style={{ lineHeight: '1.8em' }}>
              Snippet Store currently support 2 layouts:
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '1em' }}> Original: This is the original layout and focus mostly on rapid snippet retrieval </li>
                <li style={{ marginBottom: '1em' }}> List and detail: This is the new layout from v0.2.0 and focus more on snippet details </li>
              </ul>
            </Paragraph>
          </Box>
        </Box>
      </Section>
    )
  }
}
