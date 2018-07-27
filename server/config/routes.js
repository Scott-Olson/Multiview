console.log("3--- Routes Set");

const multiCtrl = require('./../controllers/multi.ctrl');

module.exports = (app) => {

    ////////////////////////////////////////////////////////////
    ////////////////////  Restaurant Routes  ///////////////////////
    ////////////////////////////////////////////////////////////

    //create review
    app.post('/api/asdfasdf', (req, res) => {
        console.log('in routes create review')
        multiCtrl.View(req, res);
    })

}
