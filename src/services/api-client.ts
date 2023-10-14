import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:"9b5fa58ecdd249c981916b9609aa3be7"
    }
})