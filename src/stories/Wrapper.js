import React from 'react'

import './styles.css'

export default function Wrapper (story) {
  return (
    <div className='StoryBook-Wrapper'>
      <link
        href='https://fonts.googleapis.com/css?family=Lato:400,700'
        rel='stylesheet'
      />
      {story()}
    </div>
  )
}
