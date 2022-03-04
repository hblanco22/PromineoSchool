//console.log('test');

/*
Cars
Make
Model
cost
I had started my assignment before this week class on Wednesday.

*/

class Model{
    constructor(type, retail){
        this.type=type;
        this.retail=retail;
    }
    describe(){
        return`${this.type} cost ${retail}.`;
    }
}

class Make{
    constructor(type){
        this.type=type;
        this.model=[];
    }

    addModel(model){
        if (model instanceof Model){
            this.model.push(model);

        } else{
            throw new Error(`Youcan only add an instance of Model. Argument is not a model: ${model}`)
        }
    }

    describe(){
        return `${this.type} has ${this.model.length} models.`;
    }
}

class Menu {
    constructor(){
        this.makes = [];
        this.selectedMake = null;
    }

    start(){
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch (selection){
                case `1`:
                    this.createMake();
                    break;
                case  `2`:
                    this.viewMake();
                    break;
                case `3`:
                    this.deleteMake();
                    break;
                case `4`:
                    this.displayMakes();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();

        }
        alert(`Sorry, no car for you.`);
    }

    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Add New Make
        2) View Make
        3) Delete a Make from list
        4) Display All Makes on current list
        `);
    }

    showMakeMenuOptions(makeInfo){
        return prompt(`
        0) Back to previous menu
        1) Add a Model
        2) Delete a Model
        _________________________
        ${makeInfo}
        `);
    }

    displayMakes(){
        let makeString = '';
        for (let i = 0; i < this.makes.length; i++){
            makeString += i + ') ' + this.makes[i].type + '\n';
        }

        alert(makeString);

    }
    
    createMake(){
        let type = prompt('Enter name of new Make:');
        this.makes.push(new Make(type));

    }

    deleteMake(){
        let index = prompt('Enter the index of the Make you would like to delete: ');
        this.makes.splice(index, 1);
    }

    viewMake(){
        let index = prompt('Enter the index of the make you wish to view:');
        if (index > -1 && index < this.makes.length) {
            this.selectedMake = this.makes[index];
            let description = ' Car Make: ' + this.selectedMake.type + '\n';

            for (let i=0; i < this.selectedMake.model.length; i++){
                description += i + ') ' + this.selectedMake.model[i].type + ' - '
                + this.selectedMake.model[i].retail + '\n';
            }

            let selection = this.showMakeMenuOptions(description);
            switch (selection){
                case '1':
                    this.createModel();
                    break;
                case '2':
                    this.deleteModel();

            }
        }
    }

    createModel(){
        let type = prompt ('Enter model:');
        let retail= prompt ('Enter retail of new model:');
        this.selectedMake.model.push(new Model(type, retail));
    }

    deleteModel(){
        let index = prompt('Enter the index of the model you wish to delete: ');
        this.selectedMake.model.splice(index, 1);
    }
}

let menu = new Menu();
menu.start();