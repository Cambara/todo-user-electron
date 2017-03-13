class FormHelper{

    static convertFormToJson(form)
    {
        let data = new FormData(form);
        let object = {};

        for(let i of data.entries())
        {
            object[i[0]] = i[1];
        }
        return object;
    }
}

module.exports = FormHelper;