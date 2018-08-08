export interface UserInterface {
    id: number;
    fakeToken: string;
    name: {
        first: string;
        last: string;
    },
    login: string;
    password: string;
}