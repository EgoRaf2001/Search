import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  searchUsersName: "",
  SearchAllUsers: [],
  currentUser: {},
  currentUserData: {},
};

export const getRateLimit = createAsyncThunk(
  "search/fetchRateLimit",
  async () => {
    const response = await fetch("https://api.github.com/rate_limit");
    const data = await response.json();
    let { remaining } = data.resources.search;

    return remaining;
  }
);

export const getUsersByName = createAsyncThunk(
  "search/fetchSearch",
  async ({ selectedName }) => {
    try {
      const response = await fetch(
        ` https://api.github.com/search/users?q=${selectedName}`
      );
      const data = await response.json();
      const users = data.items.map((user) => user);
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
);

export const getFinallyUsers = createAsyncThunk(
  "search/fetchUsers",
  async (userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    console.log(data);
    return data;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchUsersName: (state, action) => {
      state.searchUsersName = action.payload;
    },
    setSearchAllUsers: (state, action) => {
      state.SearchAllUsers = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setCurrentUserData: (state, action) => {
      state.currentUserData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRateLimit.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRateLimit.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(getUsersByName.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsersByName.fulfilled, (state, action) => {
        state.status = "idle";
        state.SearchAllUsers = action.payload;
      })
      .addCase(getFinallyUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFinallyUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.currentUserData = action.payload;
      });
  },
});

export const { setSearchUsersName, setCurrentUser, setSearchAllUsers } =
  searchSlice.actions;
export const searchUsersName = (state) => state.search.searchUsersName;
export const SearchAllUsers = (state) => state.search.SearchAllUsers;
export const currentUser = (state) => state.search.currentUser;
export const currentUserData = (state) => state.search.currentUserData;

export default searchSlice.reducer;
