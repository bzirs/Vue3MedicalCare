import type { User, CodeType, ILoginFormData } from '@/types/user'
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

/**
 * @description 发送验证码
 * @param mobile
 * @param type
 * @returns
 */
export const sendMobileCode = (mobile: string, type: CodeType) =>
  request<{ code: string }>('/code', 'GET', { mobile, type })
