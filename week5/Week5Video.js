class Player{
    constructor(name, position){
        this.name=name;
        this.position= position;
    }

    describe(){
        return `${this.name} plays ${this.position}.`;
    }
}

class Team{
    constructor(name){
        this.name=name;
        this.player=[];
    }

    addPlayer(player){
        if (player instanceof Player){
            this.player.push(player);

        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }

    }  

    describe(){
        return `${this.name} has ${this.player.length} players.`;
    }
}

class Menu {
    constructor(){
        this.teams = [];
        this.selectedTeam = null;

    }

    start(){
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch (selection){
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
                               
            }
            selection = this.showMainMenuOptions();

        }
        alert('Goodbye');
    }

    showMainMenuOptions(){
        return prompt(`
            0) Exit
            1) Create New Team
            2) View Team
            3) Delete Team
            4) Display All Teams
        `);
    }

    showTeamMenuOptions(teamInfo){
        return prompt(`
        0) Back
        1) Create Player
        2) Delete Player
        --------------------------------
        ${teamInfo}
        `);
    }

    displayTeams(){
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++){
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(teamString);

    }

    createTeam(){
        let name = prompt('Enter name for new team:');
        this.teams.push(new Team(name));
    }

    deleteTeam(){
        let index = prompt('Enter the index of the Team you wish to delete: ');
        this.teams.splice(index, 1);
    }

    viewTeam(){
        let index = prompt('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';
            
            for (let i=0; i < this.selectedTeam.player.length; i++){
                description += i + ') ' + this.selectedTeam.player[i].name + ' - ' 
                + this.selectedTeam.player[i].position + '\n';
            }

            let selection= this.showTeamMenuOptions(description);
            switch (selection){
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
                

            }

        }
    }

    createPlayer(){
        let name = prompt ('Enter name for New Player;');
        let position = prompt ('Enter postion for new player:');
        this.selectedTeam.player.push(new Player(name, position));
    }

    deletePlayer(){
        let index = prompt('Enter the index of the player you wish to delete: ');
        this.selectedTeam.player.splice(index, 1);
    }
}

let menu = new Menu();
menu.start();