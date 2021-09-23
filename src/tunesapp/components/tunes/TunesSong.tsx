import { SongType } from "./TunesTypes";
import { truncate } from "lodash";
import React from "react";

//STYLES
import "./TunesSong.scss";

//COMPONENT
export const TunesSong = (props: { song: SongType }) => {
  const { song } = props;
  //FILTER SONG TITLE DESCRIPTION BALAST
  const songFilter = (song: SongType): string => {
    const newTitle = song.artist + " - " + song.title;
    return shorten(newTitle, 100);
  };

  //--> FILTER SONG DESCRIPTION BALAST
  const shorten = (str: string, len: number): string => {
    return truncate(str, { length: len });
  };

  //TEMPLATE
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
