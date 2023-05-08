import { Display } from '../Display';
import { Container } from './styles';

export function Content() {
  return (
    <Container>
      <Display title="years" />
      <Display title="months" />
      <Display title="days" />
    </Container>
  );
}
