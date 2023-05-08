import { Content } from '../Content';
import { Header } from '../Header';
import { Container, Shape } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Shape>
        <Header />
        <Content />
      </Shape>
    </Container>
  );
}
