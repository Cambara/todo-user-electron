class UserServices
{
    constructor(controller)
    {
        this.controller = controller;
    }

    add(event)
    {
        event.preventDefault();
        let form = document.querySelector('#user_form');

        //Validate
        let UserValidate = require('../validates/UserValidate');
        let validate = new UserValidate();
        let user = FormHelper.convertFormToJson(form);
        
        if(!validate.isValid(user))
        {
            MessageHelper.showError(validate.messages.join(" \n")); 
            return; 
        } 
        console.log(user);
        //Save
        this.controller.userRepository.add(user,this);
    }
    
    resultAdd(result)
    {
        console.log(result);
    } 

    _resetForm(form)
    {

    }
}

module.exports = UserServices;