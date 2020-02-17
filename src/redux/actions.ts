export type Action = { type: string, payload: any }
export const actionFactory = (type: string) => (payload: any): Action => ({ type, payload });

export const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE';
export const setSelectedPage = actionFactory(SET_SELECTED_PAGE);