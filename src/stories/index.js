import React from 'react'
import {storiesOf, action} from '@kadira/storybook'
import compose from 'recompose/compose'
import withState from 'recompose/withState'

import Wrapper from './Wrapper'

import TypedGrid from '../components/TypedGrid'
import TypedPanel from '../components/TypedPanel'
import GridHeader from '../components/GridHeader'
import Browser from '../components/Browser'
import Settings from '../components/Settings'
import LoginForm from '../components/LoginForm'

import albums from '../../albums.json'
import artists from '../../artists.json'
import playlists from '../../playlists.json'
import servers from '../../servers.json'
import libraries from '../../libraries.json'

const StatefulGridHeader = (
  withState('currentSection', 'onChange', 'Albums')
)(GridHeader)

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
