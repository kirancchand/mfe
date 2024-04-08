const INCREMENT = 'INCREMENT';
const CLEAR = 'CLEAR';
export const incrementCount = () => ({
  type: INCREMENT,
});

export const clearCount = () => ({
  type: CLEAR,
});
export default function notificationReducer(state = { count: 3 }, action) {
  switch (action.type) {
    case INCREMENT:
      console.log("state",state)
      return { count: state.count + 1 };
    case CLEAR:
      return { count: 0 };
    default:
      return state;
  }
}