import "./App.css";
import { Layout } from "antd";
import styled from 'styled-components'
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
        <ContentContainer>Content</ContentContainer>
      </LayoutContainer>

  );
}

export default App;
