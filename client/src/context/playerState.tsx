import React, { useReducer } from "react";
import playerReducer from "./playerReducer";
import playerContext from "./playerContext";
import { Song } from "../global.d";

interface PlayerStateProps {
  children: React.ReactNode;
}

const PlayerState = ({ children }: PlayerStateProps) => {
  const initialState = {
    playlist: [],
    currentSong: null,
    isPlaying: false,
    song: null,
    repeat: false,
    shuffle: false,
  };

  const [state, dispatch] = useReducer(playerReducer, initialState);

  const setCurrentSong = (id: number) => {
    dispatch({ type: "SET_Current_Song", payload: id });
  };

  const setPlaylist = (playlist: [Song]) => {
    dispatch({ type: "SET_PLAYLIST", payload: playlist });
  };

  const likeSong = (id: number) => {
    dispatch({ type: "Like", payload: id });
  };

  return (
    <playerContext.Provider
      value={{
        playlist: state.playlist,
        currentSong: state.currentSong,
        isPlaying: state.isPlaying,
        song: state.song,
        repeat: state.repeat,
        shuffle: state.shuffle,
        setCurrentSong,
        setPlaylist,
        likeSong,
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

export default PlayerState;
