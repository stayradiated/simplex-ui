import React from 'react'
import {storiesOf, action} from '@kadira/storybook'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

import Wrapper from './Wrapper'

import Browser from '../components/Browser'
import GridHeader from '../components/GridHeader'
import LoginForm from '../components/LoginForm'
import Queue from '../components/Queue'
import Settings from '../components/Settings'
import SoundBars from '../components/SoundBars'
import TypedGrid from '../components/TypedGrid'
import TypedPanel from '../components/TypedPanel'

import albums from '../../albums.json'
import artists from '../../artists.json'
import playlists from '../../playlists.json'
import servers from '../../servers.json'
import libraries from '../../libraries.json'

const StatefulGridHeader = (
  withState('currentSection', 'onChange', 'Albums')
)(GridHeader)

storiesOf('Icon', module)
  .addDecorator(Wrapper)
  .add('SoundBars', () => (
    <SoundBars />
  ))

storiesOf('Header', module)
  .addDecorator(Wrapper)
  .add('for Albums', () => (
    <StatefulGridHeader
      sections={['Playlists', 'Artists', 'Albums', 'Tracks']}
    />
  ))

storiesOf('Grid', module)
  .addDecorator(Wrapper)
  .add('of Albums', () => (
    <TypedGrid
      items={albums}
      onChange={action('Select Item')}
    />
  ))
  .add('of Artists', () => (
    <TypedGrid
      items={artists}
      onChange={action('Select Item')}
    />
  ))

storiesOf('Panel', module)
  .addDecorator(Wrapper)
  .add('Album', () => (
    <TypedPanel
      item={albums[0]}
      currentlyPlayingTrackId={albums[0].tracks[4].id}
      onClose={action('Close Panel')}
      onSelectTrack={action('Change Track')}
    />
  ))
  .add('Artist', () => (
    <TypedPanel
      item={artists[0]}
      currentlyPlayingTrackId={artists[0].albums[0].tracks[4].id}
      onClose={action('Close Panel')}
      onSelectTrack={action('Change Track')}
    />
  ))
  .add('Playlist', () => (
    <TypedPanel
      item={playlists[0]}
      currentlyPlayingTrackId={playlists[0].tracks[4].id}
      onClose={action('Close Panel')}
      onSelectTrack={action('Change Track')}
    />
  ))

const StatefulBrowser = compose(
  withState('section', 'onChangeSection', 'Albums'),
  withState('item', 'onChangeItem', null)
)(Browser)

storiesOf('Browser', module)
  .addDecorator(Wrapper)
  .add('Albums & Artists', () => (
    <StatefulBrowser
      sections={{
        Albums: albums,
        Artists: artists,
        Playlists: playlists,
      }}
    />
  ))

const StatefulSettings = compose(
  withState('selectedServerId', 'onSelectServer', servers[1].id),
  withState('selectedLibraryId', 'onSelectLibrary', libraries[1].id),
)(Settings)

storiesOf('Settings', module)
  .addDecorator(Wrapper)
  .add('Main', () => (
    <StatefulSettings
      servers={servers}
      libraries={libraries}
    />
  ))

storiesOf('Login Form', module)
  .addDecorator(Wrapper)
  .add('Main', () => (
    <LoginForm onSubmit={action('Submit Form')} />
  ))

storiesOf('Queue', module)
  .addDecorator(Wrapper)
  .add('Full', () => (
    <Queue
      tracks={playlists[4].tracks}
      selectedIndex={5}
      onChange={action('Queue Change')}
      onSort={action('Queue Sort')}
    />
  ))
