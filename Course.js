export class Course {
    constructor ({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    })
    {
        this._lang = lang;
        this._isFree = isFree;
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(newName){
        if (newName === "Mal curso")
        {
            console.error("Web... no")
        } else{
            this._name = newName;
        }
    }
}