import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        //ano-cor



        fetch(url, {/*add rest of headers needed*/   /*Access-Control-Allow-Headers */ })

            .then((res) => {
                /*if (!res.ok) {
                    throw Error("could not fetch the data for that resource");
                    console.log("could not fetch the data for that resource");
                }*/
                console.log("res", res);

                return res.json();
            })
            .then((data) => {
                console.log("data: " + data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    setIsPending(false);
                    setError(err.message);
                    console.log(err.message);
                }
            });

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;