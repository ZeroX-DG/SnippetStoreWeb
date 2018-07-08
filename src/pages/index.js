import React from 'react'
import Intro from '../components/intro'
import LongIntro from '../components/long-intro'
import TagFeature from '../components/tag-feature'
import LayoutFeature from '../components/layout-feature'

export default class Index extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Intro />
        <LongIntro />
        <LayoutFeature />
        <TagFeature />
      </div>
    )
  }
}
