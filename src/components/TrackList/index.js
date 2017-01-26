import React, {PropTypes} from 'react'
import {AutoSizer, List} from 'react-virtualized'

import './styles.css'

import TrackListItem from './Item'
import TrackListSummary from './Summary'

export default function TrackList (props) {
  const {tracks} = props

  const renderTrack = ({index, style}) => {
    if (index === tracks.length) {
      return (
        <TrackListSummary
          key={index}
          tracks={tracks}
          style={style}
        />
      )
    }

    const track = tracks[index]
    return (
      <TrackListItem
        key={index}
        track={track}
        style={style}
      />
    )
  }

  renderTrack.propTypes = {
    style: PropTypes.shape({}),
    index: PropTypes.number.isRequired,
  }

  return (
    <AutoSizer>
      {({height, width}) => (
        <List
          width={width}
          height={height}
          rowCount={tracks.length + 1}
          rowHeight={40}
          rowRenderer={renderTrack}
          style={{
            overflowX: 'hidden',
          }}
        />
      )}
    </AutoSizer>
  )
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
}
