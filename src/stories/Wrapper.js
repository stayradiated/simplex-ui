import React from 'react'

import './styles.css'

export default function Wrapper (story) {
  return (
    <div className='StoryBook-Wrapper'>
      <link
        href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400'
        rel='stylesheet'
      />
      {story()}
    </div>
  )
}
