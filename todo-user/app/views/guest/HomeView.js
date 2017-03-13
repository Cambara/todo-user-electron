class HomeView{

    constructor(element)
    {
        this.element = element;
    }

    _template()
    {
        return `
            <div>
                
            </div>`;
    }

    update()
    {
        this.element.innerHTML = this._template();
    }
}

module.exports =  HomeView;