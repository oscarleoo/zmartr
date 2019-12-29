
export const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE'
export const displayMessage = (bool) => {
    return { type: DISPLAY_MESSAGE, payload: bool }
}
