import { Api } from "../services/api";
import { ILogin, IUser } from "./types";

export function setUserLocalStorage(user: IUser | null){
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUserLocalStorage(){
  const json = localStorage.getItem('user');
  if(!json) return null;
  const user = JSON.parse(json);
  return user ?? null;
}

export async function LoginRequest(login: ILogin){
  try {
    const request = await Api.post('api-auth/', login);
    return request.data;
  } catch (error) {
    return alert("Inválidos email ou senha!");      
  }
}