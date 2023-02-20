import type { ILoginFormData } from '@/types/login'
import type { User } from '@/types/user'
import { request } from '..'

/**
 * @description 密码登录
 * @param obj
 * @returns UserInfo
 */
export const toPLogin = (obj: ILoginFormData) => request<User>('/login/password', 'POST', obj)

/**
 * @description 验证码登录
 * @param obj
 * @returns
 */
export const toCLogin = (obj: ILoginFormData) => request<User>('/login', 'POST', obj)
