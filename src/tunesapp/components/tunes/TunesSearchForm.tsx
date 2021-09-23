import { debounce } from "lodash";
import React, { ChangeEvent, FormEvent, useRef } from "react";
//STYLES
import "./TunesSearchForm.scss";

// //PROPS
// interface Props {
//   onSearch: (query: string) => void;
// }

type Props = {
  onSearch: (query: string) => void;
};
//COMPONENT
export const TunesSearchForm = (props: Props) => {
  //REF
  const searchInput = useRef<HTMLInputElement>(null);

  //SUBMIT FORM
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    searchForMusic(); //chcem zavolat po odoslani formularu
  };

  //INPUT ELEMENT
  // tym, ze obalim funkciu do debounce-lodash, a zadam argumet 500, docielim,
  // ze vyhladavanie nastane az potom, ako prestanem na 0.5 sekundy pisat
  const handleInput = debounce((evt: ChangeEvent<HTMLInputElement>) => {
    searchForMusic();
  }, 500);

  //SEARCH FOR MUSIC
  const searchForMusic = () => {
    // ked sa spusti searchForMusic ja chcem aby sa v rodicovi odaplilo vyhladavanie songov v iTunes
    let searchString = searchInput.current?.value; // text napisany do inputu  // react uklada odkaz na konkretny DOM elementu pod vlastnostou current
    if (searchString) props.onSearch(searchString); //ak existuje nejaky string (je nieco v inpute) odpalim rodicovu onSearch funkciu
    // cim preposlem data inputu do handleSearch = (query: string)  ... kde query teda bude mat hodnotu inputu zo searchString
  };
  //TEMPLATE
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          ref={searchInput}
          onChange={handleInput} //zmena stavu pocas pisania
          className="search"
        />
      </form>
    </div>
  );
};
