import "./App.css";
import { Layout } from "antd";
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';

const { Header, Content } = Layout;
const LayoutContainer = styled(Layout)`
  height: 100vh;
  width: 100vw;
  max-width: 1054px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContentContainer = styled(Content)`
  flex: 1;
  width: 100%;
`
function App() {
  
  return (
      <LayoutContainer>
        <Header>Header</Header>
        <ContentContainer>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </ContentContainer>
      </LayoutContainer>

  );
}

export default App;
