import { createSelector } from 'reselect';

export const rawFireClick = (state) => state.fireClick;

export const fireClick = createSelector(rawFireClick, ({ data }) => {
    if (!data) return data;
    const { message, loading, response } = data;
    return ({
        response,
        message,
        loading
    });
})
