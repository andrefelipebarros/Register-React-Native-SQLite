export interface IWelcomeUserData {
    username: string,
    cpf: string,
    email: string,
}

export interface IUserRegisterData {
    cpf: string
    username: string,
    password: string,
    email: string,
}

export interface IUserData {
    id: number,
    cpf: string,
    username: string,
    password: string,
    email: string
}