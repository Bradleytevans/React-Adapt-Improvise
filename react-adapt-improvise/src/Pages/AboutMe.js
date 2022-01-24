import React from "react";
import profile from "../images/Profile-pic.png";
import ParticlesBg from "particles-bg";
export default function AboutMe() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>

      <div className="my-5">
        <h1 id="aboutMe" className="text-white">
          About Me
        </h1>
        <div className="my-2">
          <h1 className="text-white">Hello! Get to know more about me!</h1>
          <br></br>
          <div className="about">
            <div className="image">
            <img
              className="profile"
              src={profile}
              alt="Brad Evans looking dapper"
              width="200px"
              height="200px"
            ></img>
            </div>
            <br></br>
            <br></br>
            <div className="text">
            <h6 className="text-white aboutText">
              My name is Bradley Evans, and I am a full stack web developer who
              is currently earning a certification from UCF for Full Stack Web
              Development. I thoroughly enjoy coding and using it to create
              beautiful and responsive applications. When I am not coding,
              skateboarding and videogames are my go to hobbies!
            </h6>
            </div>
          </div>
        </div>
      </div>
      <ParticlesBg type="cobweb" color="#ff0000" num={30} bg={true} />
    </div>
  );
}
