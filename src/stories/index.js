import React from 'react'
import {storiesOf} from '@kadira/storybook'

import Wrapper from './Wrapper'

import AlbumGrid from '../components/AlbumGrid'
import AlbumPanel from '../components/AlbumPanel'
import GridHeader from '../components/GridHeader'
import Browser from '../components/Browser'

import albums from '../../plexdata.json'

storiesOf('Header', module)
  .addDecorator(Wrapper)
  .add('for Albums', () => (
    <GridHeader
      sections={['Playlists', 'Artists', 'Albums', 'Tracks']}
      currentSection='Albums'
    />
  ))

storiesOf('Grid', module)
  .addDecorator(Wrapper)
  .add('of Albums', () => (
    <AlbumGrid size={200} items={albums} />
  ))

storiesOf('AlbumPanel', module)
  .addDecorator(Wrapper)
  .add('Starboy', () => (
    <AlbumPanel album={albums[0]} />
  ))
  .add('Chairlift', () => (
    <AlbumPanel album={albums[2]} />
  ))
  .add('Slow Gum', () => (
    <AlbumPanel album={albums[21]} />
  ))

storiesOf('Browser', module)
  .addDecorator(Wrapper)
  .add('Albums', () => (
    <Browser albums={albums} />
  ))
