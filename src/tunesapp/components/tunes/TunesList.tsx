import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SongType } from "./TunesTypes";

//STYLES
import "./TunesList.scss";

//CHILDREN
import { TunesSong } from "./TunesSong";

//COMPONENT
export const TunesList = (props: { songs: SongType[] }) => {
  const { songs } = props;

  //TEMPLATE
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
