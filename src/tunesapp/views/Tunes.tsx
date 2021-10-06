import { SongType } from "../types/TunesTypes";
import { SongTypeFromITunes } from "../types/TunesTypes";
import React, { useState } from "react";
import axios from "axios";

// CHILDREN
import { TunesList } from "../components/tunes/TunesList";
import { TunesSearchForm } from "../components/tunes/TunesSearchForm";

//STYLES
import "./Tunes.scss";
// import useContext from "react";

// COMPONENT
export const Tunes = () => {
  //STATE
  const [songs, setSongs] = useState<SongType[]>([]);

  //CALLBACK FUNCTION  vytovri pre song objekt a natlaci ho do stavu - setSong
  const handleSearch = (query: string) => {
    axios
      .get(
        `https://itunes.apple.com/search?term=${encodeURI(
          query
        )}&entity=musicTrack&limits=5`,
        { headers: { "Access-Control-Allow-Origin": "*" } } // axios cors headers - komunikaica medzi servermi a bla bla
      )
      .then((response) => {
        let iTunesSongs = response.data.results
          .filter((song: SongTypeFromITunes) => song.kind === "song")
          .map((song: SongTypeFromITunes) => extractData(song));

        setSongs(iTunesSongs);
      });
  };
  // object destructuring -> to iste ako const {name} = props, kde sme si rozlozili objekt props na konstanty
  // to iste sa moze spravit aj s funkciou, ked jej ako parameter zadame objekt.
  //({objekt}) sa takto rozlozi na vlastnosti a vo fcii vzniknu nove premenne
  const extractData = ({
    trackId: id,
    artistName: artist,
    previewUrl: audioFile,
    artworkUrl100: artwork,
    trackName: title,
    collectionName: album,
  }: SongTypeFromITunes) => {
    return { id, artist, audioFile, artwork, title, album } as SongType;
  };

  // TEMPLATE
  return (
    <article className="tunes">
      <h1>Tunes</h1>
      <TunesSearchForm onSearch={handleSearch} />
      <TunesList songs={songs} />
    </article>
  );
};
