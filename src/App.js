import "./App.css";
import { Layout } from "antd";
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Board from './pages/board';
import Header from './components/header/header'
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
const { Content } = Layout;

const LayoutContainer = styled(Layout)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  overflow-x: scroll;
  background-color: ${props => props.isColor ? props.bgColor : "#fff"};
`

const ContentContainer = styled(Content)`
  flex: 1;
  width: 100%;
  margin-top: 70px;
  position: relative;
`;

function App() {
  const {loginDone} = useSelector(state => state.user)
  const { background } = useSelector(state => state.board.board);
  return (
    <LayoutContainer isColor={loginDone} bgColor={background}>
      <Header/>
      <ContentContainer>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/b" component={Board} />
        </Switch>
      </ContentContainer>
    </LayoutContainer>

  );
}

export default App;
