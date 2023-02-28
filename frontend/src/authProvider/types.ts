export interface IUser{
  email?: string;
  token?: string;
}

export interface ILogin{
  username?: string;
  password?: string;
}

export interface Icontext extends IUser{
  authenticate: (login: ILogin) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider{
  children: JSX.Element;
}