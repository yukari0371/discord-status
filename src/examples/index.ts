import { discordStatus } from "..";

(async() => {
    await discordStatus.getStatus().then((result) => {
        if (result.status === "error") {
            return console.error("Error:", result.message);
        }
        console.log("API Response Time: ", Math.round(result.metrics[0].summary.mean));
    }).catch((error) => {
        if (error instanceof Error) {
            return console.error("Error", error.message);
        }
    });
})();