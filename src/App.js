import React, { Component } from 'react';
import './App.css';
import players from "./players.json";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/nav";

class App extends Component {
  state = {
    PlayersArray: players,
    score: 0,
    TopScore: 0
  };

  shuffleArray = () => {
    let array = this.state.PlayersArray;
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log("Shuffled");
    this.setState({PlayersArray:array});
};

handleClick = (event) => {
  const target = event.target.id;
  if (this.state.PlayersArray[target].clicked===false){
    const newScore = this.state.score +1;
    this.setState({score: newScore});
    if(newScore > this.state.TopScore){
      this.setState({TopScore: newScore});
    }
    this.playerClick (target);
  } else{
    this.gameOver();
  }
};

gameOver = () => {
  this.setState({score: 0});
  const array = this.state.PlayersArray;
  for(let i = 0; i < array.length; i++ ){
    array[i].clicked = false;
  }
  this.setState({PlayersArray: array});
  this.shuffleArray();
};

playerClick = (target) => {
  const array = this.state.PlayersArray;
  array[target].clicked = true;
  this.setState({PlayersArray: array});
  this.shuffleArray(); 
};

  render() {
    return (
      <Wrapper>
      <Nav 
      score = {this.state.score}
      TopScore = {this.state.TopScore}
      />
        {players.map((player, index) => (
          <ImageCard
            id={player.id}
            key={index}
            name={player.name}
            image={player.image}
            index={index}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;