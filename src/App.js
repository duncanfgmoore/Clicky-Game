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
    const clicked = this.state.clicked;

    //if statement when image has already been clicked
    if (clicked.includes(id)) {
      alert("You have already clicked that one. You lose.");
      if (this.state.score > this.state.highscore) {
        this.setState({ image, clicked: [], highscore: this.state.score, score: 0 });
        return;
      } else {
        this.setState({ image, clicked: [], score: 0 });
        return;
      }
    }

    //else statement when the id is not in the array
    else {
      clicked.push(id);
      this.setState({ image, score: clicked.length });

      for (let i = image.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [image[i], image[j]] = [image[j], image[i]];
      }
      if (clicked.length === 12) {
        alert("You did it! You clicked all the images!");
        this.setState({ image, clicked: [], highscore: 12, score: 0 });
      }
      return;
    }
  };

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
            imageClicked={this.imageClicked}
            />
        ))}
          </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;