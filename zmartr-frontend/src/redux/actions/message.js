
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const createMessage = (text, type) => ({
  type: CREATE_MESSAGE, payload: { text, type },
});

export const CLOSE_MESSAGE = 'CLOSE_MESSAGE';
export const closeMessage = () => ({ type: CLOSE_MESSAGE });
