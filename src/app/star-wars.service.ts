export class StarWarsService {
  private characters = [{
    name: 'Luke Skywalker', side: ''
  },
    {
      name: 'Darth Vader', side: 'dark'
    }];

  onSideChosen(charInfo: { name: string, side: string }) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
  }

  getCharacters(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    })
  }
}