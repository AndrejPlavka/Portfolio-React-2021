import { SongType } from "../../types/TunesTypes";
import { truncate } from "lodash";
import React from "react";

// Styles:
import "./TunesSong.scss";

// Component:
export const TunesSong = (props: { song: SongType }) => {
  const { song } = props;
  // filter song description balast
  const songFilter = (song: SongType): string => {
    const newTitle = song.artist + " - " + song.title;
    return shorten(newTitle, 100);
  };

  // --> filter song description balast
  const shorten = (str: string, len: number): string => {
    return truncate(str, { length: len });
  };

  // Template:
  return (
    <article className="song">
      <div className="inside">
        <h2>{songFilter(song)}</h2>

        <div className="player">
          {song.artwork && <img src={song.artwork} alt="album art" />}
          <audio controls src={song.audioFile} />
        </div>
      </div>

      <footer className="meta">{shorten(song.album, 40)}</footer>
    </article>
  );
};
