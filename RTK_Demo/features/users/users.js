const {createAsyncThunk, createSlice} = require("@reduxjs/toolkit")
const axios = require("axios")

const initialState = {
    loading : false,
    users: [],
    error: ""
}

const fetchUsers = createAsyncThunk('user/fetchUsers', () =>
    {
        return axios.get("https://jsonplaceholder.typicode.com/albums").then(response => response.data.map(user => user.id))
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchUsers.fulfilled, (state, action)  => {
            state.loading = false,
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action)  => {
            state.loading = false,
            state.error = action.error.message
        })
    }
})

module.exports = usersSlice.reducer
module.exports.fetchUsers = fetchUsers