import io from "socket.io-client";

let endPoint = "http://35.188.189.237:8000";
export let socket = io.connect(`${endPoint}`);