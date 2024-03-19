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
    isShuffle: false,
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

  const setNextSong = () => {
    let index = state.playlist.findIndex(
      (song: Song) => song.id === state.currentSong
    );
    if (state.isShuffle) {
      index = Math.floor(Math.random() * state.playlist.length);
      while (
        index ===
        state.playlist.findIndex((song: Song) => song.id === state.currentSong)
      ) {
        index = Math.floor(Math.random() * state.playlist.length);
      }
    } else {
      index = (index + 1) % state.playlist.length;
    }
    dispatch({ type: "SET_Current_Song", payload: state.playlist[index].id });
  };

  const setPrevSong = () => {
    let index = state.playlist.findIndex(
      (song: Song) => song.id === state.currentSong
    );
    if (state.isShuffle) {
      index = Math.floor(Math.random() * state.playlist.length);
    } else {
      index = (index - 1 + state.playlist.length) % state.playlist.length;
    }
    dispatch({ type: "SET_Current_Song", payload: state.playlist[index].id });
  };

  const toggleShuffle = () => {
    dispatch({ type: "SET_SHUFFLE", payload: !state.isShuffle });
  };

  const togglePlay = () => {
    if (state.isPlaying) {
      dispatch({ type: "PAUSE", payload: !state.isPlaying });
    } else {
      dispatch({ type: "PLAY", payload: !state.isPlaying });
    }
  };

  return (
    <playerContext.Provider
      value={{
        playlist: state.playlist,
        currentSong: state.currentSong,
        isPlaying: state.isPlaying,
        song: state.song,
        repeat: state.repeat,
        isShuffle: state.isShuffle,
        setCurrentSong,
        setPlaylist,
        likeSong,
        setNextSong,
        setPrevSong,
        toggleShuffle,
        togglePlay,
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

export default PlayerState;
