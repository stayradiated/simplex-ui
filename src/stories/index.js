import React from 'react'
import {storiesOf, action} from '@kadira/storybook'

import Wrapper from './Wrapper'

import TypedGrid from '../components/TypedGrid'
import TypedPanel from '../components/TypedPanel'
import GridHeader from '../components/GridHeader'
import Browser from '../components/Browser'
import Settings from '../components/Settings'

import albums from '../../albums.json'
import artists from '../../artists.json'
import playlists from '../../playlists.json'
import servers from '../../servers.json'
import libraries from '../../libraries.json'

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
        Playlists: playlists,
      }}
    />
  ))

storiesOf('Settings', module)
  .addDecorator(Wrapper)
  .add('Main', () => (
    <Settings
      servers={servers}
      selectedServerId={servers[1].id}
      libraries={libraries}
      selectedLibraryId={libraries[1].id}
    />
  ))
