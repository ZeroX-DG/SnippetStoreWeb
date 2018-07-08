import React from 'react'
import { Hero, Paragraph, Box, Heading, Image } from 'grommet'

export default class Intro extends React.Component {
  render () {
    return (
      <Hero size='large'>
        <Box direction='row'
          justify='center'
          align='center'>
          <Box basis='1/2'
            align='end'
            pad='medium'>
            <Image src='screenshot-list-and-detail-light.png' size='large' />
          </Box>
          <Box basis='1/2'
            align='start'
            pad='medium'>
            <Heading margin='none' style={{ fontFamily: 'Lato' }}>
              Snippet Store
              <Paragraph size='large'>
                A snippet management app for developers
              </Paragraph>
            </Heading>
          </Box>
        </Box>
      </Hero>
    )
  }
}
