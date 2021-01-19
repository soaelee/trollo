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
  background-color: ${props => props.bgColor ? "#3C69A3" : "#fff" }
  
`
const ContentContainer = styled(Content)`
  flex: 1;
  width: 100%;
  margin-top: 100px;
  position: relative;
`

function App() {
  const {loginDone} = useSelector(state => state.user)
  
  return (
    <LayoutContainer bgColor={loginDone}>
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
