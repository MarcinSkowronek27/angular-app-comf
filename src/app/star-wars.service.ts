export class StarWarsService {
  private characters = [{
    name: 'Luke Skywalker', side: ''
  },
    {
      name: 'Darth Vader', side: 'dark'
    }];

  getCharacters(chosenList: string) {
      if (chosenList === 'all') {
        return this.characters.slice();
      }
      return this.characters.filter((char) => {
        return char.side === chosenList;
      })
  }

  onSideChosen(charInfo: { name: string, side: string }) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
  }

  addCharacter(name: string, side: string){
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    })
    if (pos !== -1) {
      return;
    }
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }
}
