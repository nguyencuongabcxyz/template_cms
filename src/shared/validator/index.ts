export interface IValidator {
    validate: (value: string) => boolean;
    error: string,
}

export interface IValidationResult {
    isValid: boolean,
    error: string,
}

export const usernameValidator: IValidator = {
  validate: (username: string) => {
    return username.length > 4;
  },
  error: "User name must be at least 4 characters!",
};

export const passwordValidator: IValidator = {
  validate: (password: string) => {
    return true;
  },
  error: "Password must be at least 6 characters and contain both upper and lower case!",
};