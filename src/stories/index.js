import React from 'react'
import {storiesOf} from '@kadira/storybook'

import Wrapper from './Wrapper'

import AlbumGrid from '../components/AlbumGrid'
import ArtistGrid from '../components/ArtistGrid'
import AlbumPanel from '../components/AlbumPanel'
import ArtistPanel from '../components/ArtistPanel'
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
    />
  ))
  .add('for Artists', () => (
    <GridHeader
      sections={['Playlists', 'Artists', 'Albums', 'Tracks']}
      currentSection='Artists'
    />
  ))

storiesOf('Grid', module)
  .addDecorator(Wrapper)
  .add('of Albums', () => (
    <AlbumGrid size={200} items={albums} />
  ))
  .add('of Artists', () => (
    <ArtistGrid size={200} items={artists} />
  ))

storiesOf('Panel', module)
  .addDecorator(Wrapper)
  .add('Album', () => (
    <AlbumPanel album={albums[0]} />
  ))
  .add('Artist', () => (
    <ArtistPanel artist={artists[0]} />
  ))

storiesOf('Browser', module)
  .addDecorator(Wrapper)
  .add('Albums', () => (
    <Browser albums={albums} />
  ))
