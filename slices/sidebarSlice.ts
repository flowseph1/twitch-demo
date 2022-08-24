import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface SideBarState {
    value: boolean;
}

const initialState: SideBarState = {
    value: true,
};

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggle: state => {
            state.value = !state.value;
        },
    },
});

// Action creators are generated for each case reducer function
export const { toggle } = sidebarSlice.actions;

export const toggleSidebarValue = (state: RootState) => state.sidebar.value;

export default sidebarSlice.reducer;
