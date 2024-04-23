import React from 'react';
import './App.css';
import styled, { css } from 'styled-components';
import {Route, BrowserRouter, Routes, NavLink} from "react-router-dom";

// @ts-ignore
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>
          <Header>
            <span>logo</span>
            <Navigation>
              <NavigationList>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/techStack">Tech Stack</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </NavigationList>
              <ContactsList>
                <li><a href="">Link1</a></li>
                <li><a href="">Link2</a></li>
                <li><a href="">Link3</a></li>
              </ContactsList>
            </Navigation>
          </Header>
            <Routes>
              <Route index element={<Home/>}></Route>
              <Route path={'/home'} element={<Home/>}></Route>
              <Route path={'/about'} element={<About/>}></Route>
              <Route path={'/techStack'} element={<TechStack/>}></Route>
              <Route path={'/projects'} element={<Projects/>}></Route>
              <Route path={'/contact'} element={<Contact/>}></Route>
            </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 80px;
    gap: 120px;
`
const Header = styled.header`
    background-color: antiquewhite;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`
const NavigationList = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: min(20px, 50px);
`
const ContactsList = styled.ul`
    display: flex;
    gap: 20px;
`
const Home = () => {
  return (
    <WrapperHome>
      <div>
        <span>Hi There</span>
        <p>My name is <span>Pavan MG</span></p>
        <h1>Web Developer</h1>
      </div>
      {/*картнка-заглушка, завтра поменяю!*/}
      <img src="https://masterpiecer-images.s3.yandex.net/650b6e6f634d11eeb2422ab2a9c6ab46:upscaled" alt=""/>
    </WrapperHome>
  )
}

// home styles
const WrapperHome = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    img{
        min-width: 50px;
        max-width: 350px;
        min-height: 50px;
        max-height: 350px;
        border-radius: 50%;
    }
`




const About = () => {
  return (
    <WrapperAbout>
      <section>
        <TitleSection>About Me</TitleSection>
        <ParagraphSection>The Generator App is an online tool that helps you to export ready-made templates
          ready to work as your future website. It helps you to combine slides, panels and other components and
          export it as a set of static files: HTML/CSS/JS.
        </ParagraphSection>
      </section>
      <section>
        <TitleSection>Work Experience</TitleSection>
        <ul>
          <li>
            <div>
              <h3></h3>
              <p><span></span><span></span></p>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
          </li>
        </ul>
      </section>
      <section></section>
    </WrapperAbout>
  )
}

//about styles

const WrapperAbout = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    section{
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
`
const TitleSection = styled.h2`
    color: rgb(66, 68, 110);
    font-family: 'Poppins', sans-serif;
    font-size: 42px;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: -0.4px;
    text-align: left;
    text-shadow: 5px 5px 5px rgba(102, 102, 102, 0.5);
`
const ParagraphSection = styled.p`
    color: rgb(102, 102, 102);
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
`

const TechStack = () => {
  return (
    <div>
      TechStack
    </div>
  )
}

const Projects = () => {
  return (
    <div>
      Projects
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      Contact
    </div>
  )
}

