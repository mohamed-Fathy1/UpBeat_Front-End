import React, { SetStateAction, useEffect, useReducer, useState } from "react";
import playerReducer from "./playerReducer";
import playerContext from "./playerContext";

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

  const setPlaylist = (playlist: any) => {
    dispatch({ type: "SET_PLAYLIST", payload: playlist });
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
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

export default PlayerState;
