import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/images/moke..png";
import Twit from "../assets/images/twitter.png";
import Insta from "../assets/images/instagram.png";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function User() {
  const [persons, setPersons] = useState([]);
  const {id} = useParams();

  useEffect(() => {
      console.log("dggd",{id});
      
    axios.get(`https://traveller.talrop.works/api/v1/blog/article/${id}`)
      .then(function (response) {
        console.log("response",response.data.data);
        setPersons(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },[id]);

  let renderItems = () => {
    console.log("Perso",persons.author)
    if (persons.author) {
      return <>
          <UserContent>
            <ImgContainer>
              <Person src={persons.author.image} alt="Image" />
            </ImgContainer>
            <Heading>{persons.title}</Heading>
            <Tag>
              {persons.author.name} <Date>{persons.posted_date}</Date>
            </Tag>
            <Paragraph>{persons.description}</Paragraph>
          </UserContent>
        </>
    }
  };
  return (
    <>
      <Header>
        <HeaderLeft>
          <HeaderImage src={Logo} alt="Logo" />
        </HeaderLeft>
        <HeaderRight>
          <HeaderNav>
            <HeaderList>
              <HeaderLink>Get Signal</HeaderLink>
            </HeaderList>
            <HeaderList>
              <HeaderLink>Support</HeaderLink>
            </HeaderList>
            <HeaderList>
              <HeaderLink>Blog</HeaderLink>
            </HeaderList>
            <HeaderList>
              <HeaderLink>Develpers</HeaderLink>
            </HeaderList>
            <HeaderList>
              <HeaderLink>Careers</HeaderLink>
            </HeaderList>
            <HeaderList>
              <HeaderLink>Donate</HeaderLink>
            </HeaderList>
            <HeaderList>
              <HeaderLink>
                <Twitter src={Twit} alt="Logo" />
              </HeaderLink>
            </HeaderList>
            <HeaderList>
              <HeaderLink>
                <Instagram src={Insta} alt="Logo" />
              </HeaderLink>
            </HeaderList>
          </HeaderNav>
        </HeaderRight>
      </Header>
      <Main>{renderItems()}</Main>
    </>
  );
}

const Header = styled.header`
  padding: 10px 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;

const HeaderLeft = styled.div`
  width: 12%;
`;
const HeaderImage = styled.img`
  width: 100%;
  display: block;
`;
const HeaderRight = styled.div`
  width: 50%;
`;
const HeaderNav = styled.ul`
  display: flex;
`;
const HeaderList = styled.li`
  margin-left: 15px;
`;
const HeaderLink = styled.a`
  font-size: 15px;
  cursor: pointer;
`;
const Twitter = styled.img`
  display: block;
`;
const Instagram = styled.img`
  display: block;
`;

const UserContent = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
`;
const Main = styled.section``;
const ImgContainer = styled.div`
  text-align: center;
  width: 20%;
  margin: 0 auto;
`;
const Person = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
  margin-bottom: 50px;
`;
const Heading = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;
const Tag = styled.small`
  display: inline-block;
  text-align: center;
  color: blue;
  margin-bottom: 20px;
`;
const Date = styled.small`
  color: #2d2d2d;
`;
const Paragraph = styled.p``;
