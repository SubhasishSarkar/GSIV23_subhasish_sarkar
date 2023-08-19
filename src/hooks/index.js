
export const fetcher = async (url) => {
    const res = await fetch(process.env.REACT_APP_BASE_URL + url, {
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + process.env.REACT_APP_AUTH_TOKEN,
            'Content-type': 'application/json',
        },
    })

    if (!res.ok) {
        try {
            return Promise.reject(await res.json())
        } catch (error) {
            return Promise.reject({ message: res.statusText })
        }
    }
    return await res.json()
}
