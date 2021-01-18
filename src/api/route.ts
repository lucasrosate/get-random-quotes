import { api } from './api';



export const fetchData = async () => {
    return await api.get("/quotes/random/", {
        headers: {
            "x-rapidapi-key": process.env.X_RAPID_API_KEY,
            "x-rapidapi-host": process.env.X_RAPID_API_HOST
        }
    })
        .then(async res => ({...res, message:"Success"}))
        .catch(async err => ({...err, message:"Failed"}));
}


