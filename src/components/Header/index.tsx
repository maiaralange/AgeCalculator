import { DateInput } from '../DateInput';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <DateInput label="DAY"></DateInput>
      <DateInput label="MONTH"></DateInput>
      <DateInput label="YEAR"></DateInput>
    </Container>
  );
}
