import Axios from 'axios'
import {toast} from "react-toastify";
const BASE_URL = 'http://localhost:8000/api/v1/bscore'

export class DataService {

    static async getDifferenceData(n: number) {
        try {
            const res = await Axios.get(`${BASE_URL}/difference?number=${n}`);
            return res.data.data;
        }catch (e) {
            if (e.response.status === 400 && e.response.data.message)
                toast.error(e.response.data.message);
            else toast.error('Something went wrong');
            return null;
        }
    }

    static async getPythagoreanData(a: number, b: number, c: number) {
        try {
            const res = await Axios.get(`${BASE_URL}/pythagorean-triplets?a=${a}&b=${b}&c=${c}`);
            return res.data.data;
        }catch (e) {
            if (e.response.status === 400 && e.response.data.message)
                toast.error(e.response.data.message);
            else toast.error('Something went wrong');
            return null;
        }
    }
}
