import axios from "axios";

const TMBD_URL = "https://api.themoviedb.org/3"
const TMBD_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

const headers = {
    Authorization: `Bearer ${TMBD_TOKEN}`
}

const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(TMBD_URL + url, {
            headers: headers,
            params: params
        })
        return data
    } catch (err) {
        console.log(err);
        return err
    }
}

export default fetchDataFromApi