interface IState {
  playlist: any[];
  currentSong: any;
  isPlaying: boolean;
  song: any;
  repeat: boolean;
  shuffle: boolean;
}

interface IAction {
  type: string;
  payload: any;
}

let playerReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.payload,
      };
    case "SET_Current_Song":
      return {
        ...state,
        currentSong: action.payload,
        isPlaying: true,
      };
    case "PLAY":
      return {
        ...state,
        isPlaying: true,
      };
    case "PAUSE":
      return {
        ...state,
        isPlaying: false,
      };
    case "SET_SONG":
      return {
        ...state,
        song: action.payload,
      };
    case "SET_REPEAT":
      return {
        ...state,
        repeat: action.payload,
      };
    case "SET_SHUFFLE":
      return {
        ...state,
        shuffle: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
