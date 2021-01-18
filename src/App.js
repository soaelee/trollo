import "./App.css";
import { Layout } from "antd";
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Board from './pages/board';
import { DragDropContext } from 'react-beautiful-dnd';
const { Header, Content } = Layout;

const LayoutContainer = styled(Layout)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow-x: scroll;
`
const ContentContainer = styled(Content)`
  flex: 1;
  width: 100%;
  max-width: 1054px;
  position: relative;
`
function App() {
  
  return (
    <LayoutContainer>
      <Header>Header</Header>
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
