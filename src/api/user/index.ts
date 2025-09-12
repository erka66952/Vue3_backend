//统一管理咱们项目用户相关的接口
import request, { requestLogin } from "@/utils/request";
import type { loginFormData, loginResponseData, userInfoReponseData } from "./type";
//项目用户相关的请求地址
enum API {
    LOGIN_URL = "/admin/acl/index/login",
    USERINFO_URL = "/admin/acl/index/info",
    LOGOUT_URL = "/admin/acl/index/logout"
}

//登录接口
// export const reqLogin = (data: loginFormData) => request.post<any, loginResponseData>(API.LOGIN_URL, data);
export const reqLogin = (data:loginFormData) => requestLogin.post<any,loginResponseData>('/api/user/login',data)

//获取用户信息
// export const reqUserInfo = () => request.get<any, userInfoReponseData>(API.USERINFO_URL);
export const reqUserInfo = () => requestLogin.get<any, userInfoReponseData>("/api/user/info");
//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)