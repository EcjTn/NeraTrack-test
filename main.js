const { items, cart } = require('./figures/models')
const { getMsg, returnPromise } = require('./promises/promise')


async function startAsync() {
    try{
        await returnPromise()
        console.log('[@NeraTrack] :',getMsg())
    }
    catch(e){
        console.log('[@NeraTrack] :',getMsg())
    }
}
startAsync()
