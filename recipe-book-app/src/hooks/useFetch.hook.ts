import { useEffect, useState } from "react";


export function useFetch(url: string) {
    const [response, setResponse] = useState<any>()


    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setResponse(data))
    }, [url])

    return response
}