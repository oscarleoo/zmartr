
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const createMessage = (message, type) => ({
  type: CREATE_MESSAGE, payload: { message, type },
});

export const CLOSE_MESSAGE = 'CLOSE_MESSAGE';
export const closeMessage = () => ({ type: CLOSE_MESSAGE });
