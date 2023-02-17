import { instance } from '@/utils/request'
import type { Method } from 'axios'

// 这个需要替换axsio.request默认的响应成功后的结果类型
// 之前是：传 { name: string } 然后res是   res = { data: { name: string } }
// 但现在：在响应拦截器中返回了 res.data  也就是将来响应成功后的结果，和上面的类型一致吗？
// 所以要：request<数据类型，数据类型>() 这样才指定了 res.data 的类型
// 但是呢：后台返回的数据结构相同，所以可以抽取相同的类型
interface IData<T> {
  data: T
  code: number
  message: string
}

export const request = <T>(url: string, method: Method = 'get', obj?: object) =>
  instance.request<T, IData<T>>({
    url,
    method,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: obj
  })

function fn<T>() {}
