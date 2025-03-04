import Axios from "axios";

/** Types */
import { getStatusResult } from "../types/discordStatus";

/** Functions */
import json from "../contents/json";

/**
 * Get information about discord status.
 * @returns {Promise<object>} - Discord status results.
 */
export const getStatus = async (): Promise<getStatusResult> => {
    return new Promise(async (resolve, reject) => {
        let resData: any;
        await Axios(json.status, {
            method: "GET",
            headers: {
                "accept": "*/*",
                "accept-encoding": "gzip, deflate, br, zstd",
                "accept-language": "ja;q=0.8",
                "if-none-match": "W/\"01560235c968412f5eb97e0c06698011\"",
                "priority": "u=1, i",
                "referer": "https://discordstatus.com/",
                "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Brave\";v=\"133\", \"Chromium\";v=\"133\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "Windows",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "sec-gpc": 1,
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
                "x-requested-with": "XMLHttpReques" 
            }
        }).then((response) => {
            if (response.status !== 200) {
                reject({
                    status: "error",
                    message: response.statusText
                });
            }
            resData = response.data;
        }).catch((e) => {
            if (e instanceof Error) {
                reject({
                    status: "error",
                    message: e.message
                });
            }
        });
        resolve({
            status: "success",
            period: resData.period,
            metrics: resData.metrics
        });
    });
};