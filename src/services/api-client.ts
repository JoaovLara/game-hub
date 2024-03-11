import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'cb686a735d2a4addaf975fb6d84a0dda',
    }
});