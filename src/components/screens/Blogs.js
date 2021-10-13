import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/images/moke..png";
import Twit from "../assets/images/twitter.png";
import Insta from "../assets/images/instagram.png";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Blogs() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://traveller.talrop.works/api/v1/blog/")
      .then(function (response) {
        console.log(response.data.data);
        setUsers(response.data.data);
        console.log("wer", users);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const renderItems = () => {
    return users.map((user) => (
      <>
        <Links to={`/blog/${user.id}`}>
          <Content>
            <Img_Container>
              <Person src={user.author.image} alt="Image" />
            </Img_Container>
            <ContentBottom>
              <ContentHeading>{user.author.name}</ContentHeading>
              <ContentPara>{user.description}</ContentPara>
              <ContentLink></ContentLink>
            </ContentBottom>
          </Content>
        </Links>
      </>
    ));
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
      <Main>
        <Heading>Blog Post</Heading>
        {renderItems()}
      </Main>
    </>
  );
}


const Links = styled(Link)`

`;
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
const Main = styled.section`
  background: #f7f7f7;
`;
const Heading = styled.h2`
  font-size: 40px;
  text-align: center;
  font-size: 40px;
  text-align: center;
  padding-top: 70px;
  font-weight: 800;
`;
const Content = styled.div`
  width: 60%;
  background: #fff;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid grey;
  margin-top: 100px;
  position: relative;
`;
const Img_Container = styled.div`
  width: 10%;
  position: absolute;
  top: -40px;
  right: 45%;
`;
const Person = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
`;
const ContentHeading = styled.h3`
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
`;
const ContentBottom = styled.div`
  padding-top: 150px;
`;
const ContentTag = styled.h6``;
const ContentPara = styled.p``;
const ContentLink = styled.a``;
