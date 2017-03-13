class UserValidate
{
    constructor()
    {
        this.errors = [];
    }

    isValid(user)
    {
        this._valideName(user.name);
        this._valideBirthDate(user.birthdate);
        this._valideGender(user.gender);

        return this.errors.length == 0;
    }

    _valideName(name)
    {
        if(name.trim() != '') return true;
        this.errors.push({
            param: 'name',
            msg:'Preencher o campo Nome'
        });
    }

    _valideBirthDate(birthdate)
    {
        if(birthdate.trim() != '') return true;
        this.errors.push({
            param: 'birthdate',
            msg:'Preencher o campo Data Nascimento'
        });
    }

    _valideGender(gender)
    {
        if(gender.trim() != '') return true;
        this.errors.push({
            param: 'gender',
            msg:'Preencher o campo Sexo'
        });
    }

    get messages()
    {
        return this.errors.map(e => e.msg); 
    }
}

module.exports = UserValidate;