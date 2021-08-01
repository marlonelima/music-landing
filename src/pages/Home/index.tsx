import {
  Container,
  Greetings,
  Header,
  Headphone,
  Main,
  Search,
  SocialMedia,
  Wrap
} from './styles'

import SearchIcon from '../../assets/icons/search.svg'

export const Home = () => {
  return (
    <Container>
      <Wrap>
        <Header>
          <nav>
            <ul>
              <li>Fones</li>
              <li>Caixas de som</li>
              <li>Airdots</li>
              <li>Contato</li>
            </ul>
          </nav>
          <Search>
            <input type="text" placeholder="O que você precisa?" />
            <button>
              <img src={SearchIcon} alt="Search" />
            </button>
          </Search>
          <SocialMedia>
            <img src="assets/social.svg" alt="Social Media" />
          </SocialMedia>
        </Header>
        <Main>
          <Greetings>
            <h1>
              Sua <span>música favorita </span>
              <br />
              mais perto de você.
            </h1>
            <button className="main">Conhecer</button>
            <button className="secondary">Ver outros</button>
          </Greetings>
          <Headphone src="assets/headphone.png" />
        </Main>
      </Wrap>
    </Container>
  )
}
