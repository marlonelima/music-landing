import styled from 'styled-components'
import { Theme } from './../../constants/Theme'

export const Container = styled.div`
  background: url('assets/waves.png'),
    linear-gradient(
      101.51deg,
      ${Theme.background.first} 0%,
      ${Theme.background.second} 96.83%
    );
  max-width: 1920px;
  min-height: 100vh;
  color: ${Theme.text.main};
  overflow-x: hidden;
  margin: 0 auto;
`

export const Wrap = styled.div`
  width: 75%;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 85%;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 110px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  ul {
    display: inline-flex;
  }

  ul li {
    font-size: 0.9rem;

    &:not(:last-child) {
      margin-right: 48px;
    }

    &:hover {
      filter: brightness(0.8);
      cursor: pointer;
    }
  }
`

export const Search = styled.form`
  flex: 1;
  border: 1px solid ${Theme.text.main};
  border-radius: 5px;
  height: 50px;
  width: 100%;
  margin-left: 60px;
  display: inline-flex;

  input {
    width: 90%;
    height: 100%;
    padding: 0 20px;
    color: #fff;
    outline: none;

    &::placeholder {
      color: ${Theme.text.main};
    }
  }

  button {
    color: ${Theme.text.main};
    flex: 1;
    height: 100%;
    padding-right: 20px;
    cursor: pointer;
  }
`

export const SocialMedia = styled.div`
  width: 150px;
  height: 50px;
  margin-left: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Main = styled.div`
  width: 100%;
  margin-top: 80px;
  display: inline-flex;
  position: relative;
`

export const Headphone = styled.img`
  height: 43rem;
  right: 0;
  position: absolute;
  transform: translateY(-15%);
`

export const Greetings = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 4.3rem;
    max-width: 800px;
    line-height: 104%;
    margin-bottom: 50px;

    span {
      color: ${Theme.primary.main};
    }
  }

  button {
    width: 12rem;
    height: 3.9rem;
    border-radius: 5px;
    font-weight: 500;
    font-size: 1.1rem;
    border: 2px solid transparent;
    transition: 0.2s;
  }

  .main {
    border: 1px solid ${Theme.primary.main};
    background: ${Theme.primary.main};
    color: ${Theme.text.black};
    box-shadow: 5px 4px 19px rgba(23, 214, 221, 0.3);

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }

  .secondary {
    margin-top: 15px;
    border-color: ${Theme.text.main};
    color: ${Theme.text.main};

    &:hover {
      background: ${Theme.text.main};
      color: ${Theme.text.black};
      cursor: pointer;
    }
  }
`
