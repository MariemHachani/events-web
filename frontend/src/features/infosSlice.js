import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activities: [],
    organizators: [],

};

const infosSlice = createSlice({
    name: 'infos',
    initialState,
    reducers: {
        setOrganizators: (state, payload) => {

        },
        setAcitivities: (state, payload) => {

        }

    }
});

export const {
    setOrganizators,
    setAcitivities
} = infosSlice.actions;
export const selectActivities = state => state.infos.activities;
export default infosSlice.reducer;