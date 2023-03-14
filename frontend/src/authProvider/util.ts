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

export function getHeader(){
  const user = getUserLocalStorage()
  return {
    headers: {
      Authorization : `Token ${user.token}`
    }
  }
}

export async function loginRequest(login: ILogin){
  try {
    const request = await Api.post('auth/', login);
    return request.data;
  } catch (error) {
    // TODO caso nao esteja logado voltar para a tela de login
    return alert("Inválidos email ou senha!");
  }
}