class GuestController{
    constructor(element)
    {
        let HomeView = require('../views/guest/HomeView.js');
        this.homeView = new HomeView(element);
    }

    init()
    {
        this.homeView.update();
    } 
}

module.exports =  GuestController;