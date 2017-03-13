class UserRepository
{
    list(callback)
    {
        connection.query('SELECT * FROM user',function(error, results, fields){
            if(error) ErrorsHelper.sqlError(error,"Ops tivemos um problema ao buscar lista de usuários");
            callback.update(results);
        });
    }
    add(user, callback)
    {
        connection.query('INSERT INTO user SET ?',user,function(error, results,fields){
            if(error) ErrorsHelper.sqlError(error,"Erro ao adicionar novo usuário");
            callback.resultAdd(results);
        });
    }
}

module.exports = UserRepository;