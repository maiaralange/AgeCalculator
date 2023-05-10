import { useAge } from '../../context/useAge';
import { DateDisplay } from '../DateDisplay';
import { Container } from './styles';

export function Content() {
  const { age } = useAge();
  return (
    <Container>
      <DateDisplay value={age.year} title="years" />
      <DateDisplay value={age.month} title="months" />
      <DateDisplay value={age.day} title="days" />
    </Container>
  );
}
