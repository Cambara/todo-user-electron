class ListUserView{

    constructor(element)
    {
        this.element = element;
    }

    _template(list)
    {
        return `
            <div>
                <h1>Lista Usuários</h1>
                <a href="#" onclick="controller.addForm();">Add User</a>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Sexo</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${list.map(l => `
                        <tr>
                            <td>${l.name}</td>
                            <td>${l.birthdate.getFullYear()}</td>
                            <td>${l.gender}</td>
                    `).join("")}
                    </tbody>
                </table>
            </div>`;
    }

    update(list = [])
    {
        this.element.innerHTML = this._template(list);
    }
}

module.exports =  ListUserView;