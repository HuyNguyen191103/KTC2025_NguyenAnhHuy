import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    isAuthenticated: false,
    error: null
}

// Async action dùng createAsyncThunk
export const login = createAsyncThunk<
  void,                                    // kiểu giá trị trả về (fulfilled)
  { email: string; password: string },     // payload (credentials)
  { rejectValue: string }                  // reject value nếu thất bại
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "1234") {
        resolve();
      } else {
        reject(rejectWithValue("Invalid credentials"));
      }
    }, 1000);
  });
});

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // có thể thêm logout ở đây nếu cần
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload || "Login failed";
      });
  }
});

export default authSlice.reducer;