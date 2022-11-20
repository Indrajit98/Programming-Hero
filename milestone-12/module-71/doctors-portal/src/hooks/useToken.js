import { useEffect, useState } from "react";

export const useToken = email => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.access_token) {
                        localStorage.setItem('access_token', data.access_token)
                        setToken(data.access_token)
                    }
                });
        }

    }, [email]);
    return [token];
}