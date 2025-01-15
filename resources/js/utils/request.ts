import { router } from '@inertiajs/react'

function post(url: string, data: any) {
    return new Promise<void>((resolve, reject) => {
        router.post(url, data, {
            onSuccess: () => resolve(),
            onError: (errors) => reject(errors),
        })
    })
}

function put(url: string, data: any) {
    return new Promise<void>((resolve, reject) => {
        router.put(url, data, {
            onSuccess: () => resolve(),
            onError: (errors) => reject(errors),
        })
    })
}

function patch(url: string, data: any) {
    return new Promise<void>((resolve, reject) => {
        router.patch(url, data, {
            onSuccess: () => resolve(),
            onError: (errors) => reject(errors),
        })
    })
}

function del(url: string) {
    return new Promise<void>((resolve, reject) => {
        router.delete(url, {
            onSuccess: () => resolve(),
            onError: (errors) => reject(errors),
        })
    })
}

export default {
    post,
    put,
    patch,
    del,
}
