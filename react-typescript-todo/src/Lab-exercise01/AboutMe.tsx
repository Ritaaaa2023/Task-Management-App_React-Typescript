import React from "react";

//Rita： Props interface defines the types of properties the component accepts
interface AboutMeProps {
  name: string;
  age: number;
  favouriteFood: string;
}


/**
 * A simple React component which accepts three props, and renders them in a paragraph (<p>).
 */


//Rita：define a functional component (AboutMe) and specify the types of properties it accepts.

const AboutMe: React.FC<AboutMeProps> =({ name, age, favouriteFood })=> {
  return (
    <p>
      Hello World! My name's {name}, I'm {age} years old, and I like {favouriteFood}.
    </p>
  );
}

export default AboutMe;