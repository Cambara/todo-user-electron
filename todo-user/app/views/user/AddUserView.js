class AddUserView{

    constructor(element)
    {
        this.element = element;
    }

    _template()
    {
        return `
            <form id="user_form" onsubmit="controller.userService.add(event)">
                <div>
                    <span>Nome:</span>
                    <input type="text" name="name" />
                </div>
                <div>
                    <span>Data Nascimento:</span>
                    <input type="date" name="birthdate" />
                </div>
                <div>
                    <span>Sexo:</span>
                    <label><input type="radio" name="gender" value="M" checked />Masc</label>
                    <label><input type="radio" name="gender" value="F" />Fem</label>
                </div>
                <button type="submit">Salvar</button>
            </form>
            `;
    }

    update()
    {
        this.element.innerHTML = this._template();
    }
}

module.exports =  AddUserView;