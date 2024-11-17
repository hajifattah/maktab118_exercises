"use server";
import { AxiosError, AxiosResponse } from "axios";
import { httpReq } from "../client";
import { urls } from "../urls";
import { setToken } from "@/utils/session-managment";
import { redirect } from "next/navigation";
import { log } from "console";

type SignUp = (data: ILoginSignup) => Promise<undefined | IError>;
export const signUp: SignUp = async (data) => {
  try {
    const instance = await httpReq();
    const response = await instance.post(urls.auth.signUp, {
      email: data.userName,
      password: data.password,
      passwordConfirm: data.password,
    });
    const responseToken = await instance.post<{ token: string }>(
      urls.auth.token,
      { identity: data.userName, password: data.password }
    );
    await setToken(responseToken.data.token);
  } catch (error) {
    log((error as AxiosError).response?.data);
    return (error as AxiosError).response?.data as IError
  }
};
export interface IError {code : number , message : string}
type Login = (data: ILoginSignup) => Promise<undefined | IError>;
export const login: Login = async (data) => {
  try {
    const instance = await httpReq();
    const responseToken = await instance.post<{ token: string }>(
      urls.auth.token,
      { identity: data.userName, password: data.password }
    );
    await setToken(responseToken.data.token);    
  } catch (error) {
    log((error as AxiosError).response?.data)
    return (error as AxiosError).response?.data as IError
  }
  // redirect("/tasks");
};
