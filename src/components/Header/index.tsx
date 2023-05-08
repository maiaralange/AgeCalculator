import { DateInput } from '../DateInput';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <DateInput></DateInput>
      <DateInput></DateInput>
      <DateInput></DateInput>
    </Container>
  );
}
