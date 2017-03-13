
class ErrorsHelper
{
    static sqlError(error,msg)
    {
        //Salvar no Log
        MessageHelper.showError(msg);
        if(isDebug)throw error;
    } 
}

module.exports = ErrorsHelper;