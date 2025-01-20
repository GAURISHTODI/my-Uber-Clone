import { createSlice } from "@reduxjs/toolkit";

//created initialState- empty initially 
const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null,
};



export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTImeInfo: (state, action) => {
            state.travelTimeInfo = action.payload;
        },
    },
});

// helps pushing the data into the central layer using useDispatch hook
export const { setOrigin, setDestination, setTravelTImeInfo } = navSlice.actions;


// Selectors : Helps us pulling information fromm the data-layer
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;

export default navSlice.reducer;
