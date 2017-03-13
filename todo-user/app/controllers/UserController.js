class UserController{
    constructor(element)
    {
        let UserRepository = require('../models/repositories/UserRepository');
        this.userRepository = new UserRepository(); 

        let ListUserView = require('../views/user/ListUserView');
        this.listUserView = new ListUserView(element);

        let AddUserView = require('../views/user/AddUserView');
        this.addUserView = new AddUserView(element);

        let UserService = require('../models/services/UserServices');
        this.userService = new UserService(this);
    }
    list()
    {
        this.userRepository.list(this.listUserView);
    }
    addForm()
    {
        this.addUserView.update();
    }

    init()
    {  
        this.list();    
    } 

}

module.exports =  UserController;