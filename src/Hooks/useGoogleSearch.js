import { useState, useEffect } from "react";

let key = process.env.REACT_APP_API_KEY;

const useGoogleSearch = (term, start = 1) => {
    let [data, setData] = useState({})

    useEffect(() => {
        if (term) {
            async function getSearchResult() {
                let req = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=c425f055191f119cd&q=${term}&start=${start}`);
                let res = await req.json()

                setData(res)
            }

            getSearchResult()
        }
    }, [term, start])

    return { data }
}

export default useGoogleSearch