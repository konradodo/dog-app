import axios from "axios";

export const url = 'https://dog.ceo/api' // TODO tu powinien być env, dla uproszczenia uruchomienia został pominięty.

export const callApiGet = async (path) => {
    try {
        const res = await axios.get(`${url}/${path}`)

        return { success: true, result: res?.data?.message || {} }
    } catch (e) {
        return { success: false }
    }
}
