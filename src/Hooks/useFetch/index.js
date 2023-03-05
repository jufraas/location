import { useEffect, useState } from 'react';


export const useEffect = (API) => {
    const [data, setData] = useState({})
    const [isLoading, setLoagin] = useState(false)

    console.log(API)
    useEffect(() => {
        setLoagin(true)
        fetch(API)
        .then(Response => Response.json())
        .then( data => {
            setData(data)
            setLoagin(false)
        })
        .catch(error => console.log(error))
    }, [])
    return {data, isLoading}
}
