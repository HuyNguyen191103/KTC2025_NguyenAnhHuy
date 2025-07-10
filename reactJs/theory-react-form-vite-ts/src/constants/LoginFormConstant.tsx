import type { LoginMessError, LoginRegex } from "../types/LoginFormType";

export const MESSAGE_ERROR: LoginMessError = {
  email: "Email error",
  password: "Password error",
};

export const REGEX: LoginRegex = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@$!%*?&]{8,}$/,
};