import { ColoredTitle, Container, Title } from './styles';

interface DisplayProps {
  title: string;
  value: string;
}

export function DateDisplay({ title, value }: DisplayProps) {
  return (
    <Container>
      <ColoredTitle>{value}</ColoredTitle>
      <Title>{title}</Title>
    </Container>
  );
}
