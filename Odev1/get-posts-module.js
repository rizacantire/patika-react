import axios from "axios"

const getData = async(url,id) => {
    const {data : data} = await  axios(`${url}${id}`)
    return {data : data}
}

export default getData;