const { items, cart } = require('./figures/models')
const { returnPromise } = require('./promises/promise')
const { getMsg } = require('./promises/promise')


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
