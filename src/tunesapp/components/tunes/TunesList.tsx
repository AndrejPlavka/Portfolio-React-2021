import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SongType } from "../../types/TunesTypes";
import { TunesSong } from "./TunesSong";
// Styles:
import "./TunesList.scss";

// Component:
export const TunesList = (props: { songs: SongType[] }) => {
  const { songs } = props;

  // Template:
  return (
    <TransitionGroup component="ul" className="tunes-list">
      {songs.map((song) => (
        <CSSTransition key={song.id} timeout={200} className="song">
          <li key={song.id}>
            <TunesSong song={song} />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
