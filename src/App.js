import "./App.css";
import { Layout } from "antd";
import styled from 'styled-components'
import Test from './components/test';

const { Header, Content } = Layout;
const LayoutContainer = styled(Layout)`
 height: 100vh;
 display: flex;
 flex-direction: column;
`
const ContentContainer = styled(Content)`
 flex: 1;
`
function App() {
  
  return (
      <LayoutContainer>
        <Header>Header</Header>
        <ContentContainer><Test /></ContentContainer>
      </LayoutContainer>

  );
}

export default App;
