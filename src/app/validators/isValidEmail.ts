const VALIDATOR_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const isValidEmail = (email: string) => {
    return VALIDATOR_REGEX.test(email);
}