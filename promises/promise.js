const path = require('path')
const { exec } = require('child_process')

let pathPy = path.join(__dirname, '..', 'scripts', 'main.py')
let msgz = "";

function returnPromise() {
    return new Promise((resolve, reject) => {

        exec(`python ${pathPy}`, (error, stdout, stderr) => {
            if(error){
                msgz = error.message //asign to msgz
                reject(error.message); 
                return
            }
            if(stderr){
                msgz = stderr //asign to msgz
                reject(stderr)
                return
            }
            msgz = stdout
            resolve(stdout)
        })
    })
}

module.exports = {
    returnPromise,
    pathPy,
    getMsg: () => msgz
};
