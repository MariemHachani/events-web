import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getOrganizators: state => {

        }

    }
});

export const {
    getOrganizators,
} = userSlice.actions;
export default userSlice.reducer;