require('dotenv').config() //dotenv
const { error } = require('console')
const { items } = require('./figures/models') //package
const { cart } = require('./figures/models') //package
const { returnPromise } = require('./promises/promise')
const { getMsg } = require('./promises/promise')







async function thisAsync() {
    try{
        await returnPromise()
        console.log('[@NeraTrack] :',getMsg())
    }
    catch(e){
        console.log('[@NeraTrack] :',getMsg())
    }
}


thisAsync()


