
class RequestController
{
    constructor(appView)
    {
        this.appView = appView;
        this._links = {
            home :  './GuestController',
            user_list: './UserController'
        };
    }
    request(link)
    {
        let instance = require(this._links[link]);
        controller = new instance(this.appView);
        controller.init(); 
    }
}

module.exports = RequestController;