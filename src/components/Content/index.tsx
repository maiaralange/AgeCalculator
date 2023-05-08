import { useAge } from '../../context/useAge';
import { Display } from '../Display';
import { Container } from './styles';

export function Content() {
  const { age } = useAge();
  return (
    <Container>
      <Display value={age.year} title="years" />
      <Display value={age.month} title="months" />
      <Display value={age.day} title="days" />
    </Container>
  );
}
