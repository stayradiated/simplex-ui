import React from 'react'
import {storiesOf, action} from '@kadira/storybook'

import Wrapper from './Wrapper'

import TypedGrid from '../components/TypedGrid'
import TypedPanel from '../components/TypedPanel'
import GridHeader from '../components/GridHeader'
import Browser from '../components/Browser'

import albums from '../../albums.json'
import artists from '../../artists.json'

storiesOf('Header', module)
  .addDecorator(Wrapper)
  .add('for Albums', () => (
    <GridHeader
      sections={['Playlists', 'Artists', 'Albums', 'Tracks']}
      currentSection='Albums'
      onChange={action('Change Section')}
    />
  ))
  .add('for Artists', () => (
    <GridHeader
      sections={['Playlists', 'Artists', 'Albums', 'Tracks']}
      currentSection='Artists'
      onChange={action('Change Section')}
    />
  ))

storiesOf('Grid', module)
  .addDecorator(Wrapper)
  .add('of Albums', () => (
    <TypedGrid size={200} items={albums} />
  ))
  .add('of Artists', () => (
    <TypedGrid size={200} items={artists} />
  ))

storiesOf('Panel', module)
  .addDecorator(Wrapper)
  .add('Album', () => (
    <TypedPanel
      item={albums[0]}
      onClose={action('Close Panel')}
    />
  ))
  .add('Artist', () => (
    <TypedPanel
      item={artists[0]}
      onClose={action('Close Panel')}
    />
  ))

storiesOf('Browser', module)
  .addDecorator(Wrapper)
  .add('Albums & Artists', () => (
    <Browser
      sections={{
        Albums: albums,
        Artists: artists,
      }}
    />
  ))
