import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import image from "./image.json";
import "./App.css";

class App extends Component {
  state = {
    image,
    clicked: [],
    score: 0,
    highscore: 0
  };

  imageClicked = id => {
    let clicked = this.state.clicked;

    //if statement when image has already been clicked
    if (clicked.includes(id)) {
      alert("You have already clicked that one. You lose.");
      if (this.state.score > this.state.highscore) {
        this.setState({ highscore: this.state.score, score: 0 });
        return;
      } else {
        this.setState({ score: 0 });
        return;
      }
    }

    //if statement when the id is not in the array
    else {
      clicked.push(id);
      this.setState({ score: this.clicked.length });

      for (let i = image.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [image[i], image[j]] = [image[j], image[i]];
      }
      if (clicked.length === 12) {
        alert("You did it! You clicked all the images!");
      }
      return;
    }
  }



  render() {
    return (
      <div>
        <NavBar score={this.state.score} highscore={this.state.highscore} />
        <Jumbotron />
        <Wrapper>
        {this.state.image.map(image => (
            <Cards 
            id={image.id} 
            key={image.id} 
            image={image.image} 
            />
        ))}
          </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
