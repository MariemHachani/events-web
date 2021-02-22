import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chosen_activities: [],

};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        setAcitivities: (state, payload) => {

        }

    }
});

export const {
    setAcitivities
} = userSlice.actions;
export const selectChosenActivities = state => state.users.chosen_activities;
export default userSlice.reducer;