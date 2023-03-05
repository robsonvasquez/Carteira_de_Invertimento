import { createContext, useEffect, useState } from "react";

import { IAuthProvider, IUser, Icontext, ILogin } from "./types";
import { loginRequest, getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<Icontext>({} as Icontext)

export function AuthProvider({children}: IAuthProvider) {

  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();
    if(user) setUser(user);
  }, []);

  async function authenticate(login: ILogin){

    const response = await loginRequest(login);
    const payload = {token: response.token, id: response.id, email: response.email};

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout(){
    setUser(null);
    localStorage.removeItem('user');
  }

  return(
    <AuthContext.Provider value = {{...user, authenticate, logout}}>
      {children}
    </AuthContext.Provider>
  )

}