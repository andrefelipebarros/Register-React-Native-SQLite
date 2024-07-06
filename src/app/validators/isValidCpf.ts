const VALIDATOR_REGEX = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

export const isValidCpf = (cpf: string) => {
    return VALIDATOR_REGEX.test(cpf);
}