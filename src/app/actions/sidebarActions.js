import axios from 'axios'
export function setSelectedStock(name) {
    return {
        type: "SET_STOCK_NAME",
        payload: axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + name + '&outputsize=compact&apikey=TV5G87QVLR5W3W1Y').then(res =>{return res.data})
            
    };
}
