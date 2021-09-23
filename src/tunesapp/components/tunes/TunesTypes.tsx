export type SongType = {
  id: number;
  artist: string;
  audioFile: string;
  artwork?: string;
  title: string;
  album: string;
};

// Do inputu/vyhladavaca apky zadam interpreta
// otvroim si developer tools-network-response
// najdem json formular-skopirujem si jeden objekt(jeden riadok)
// ulozim do vsc npr. ako itnues.obj.json a zavolam Open quicktype for Json
// skopirujem a uzlozim podla potreby do Types ts/tsx
export interface SongTypeFromITunes {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: boolean;
}

// type ContextProps = {
//   songs: SongType[];
// };

// export const TunesContext = createContext<ContextProps>({} as ContextProps);

// export const TunesProvider = (props: { children: ReactNode }) => {
//   const [songs, setSongs] = useState<SongType[]>([]);

//   const contextValues = {
//     songs,
//   };

//   return (
//     <TunesContext.Provider value={contextValues}>
//       {props.children}
//     </TunesContext.Provider>
//   );
// };
