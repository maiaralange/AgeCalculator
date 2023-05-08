import { ColoredTitle, Container, Title } from './styles';

interface DisplayProps {
  title: string;
}

export function Display({ title }: DisplayProps) {
  return (
    <Container>
      <ColoredTitle>--</ColoredTitle>
      <Title>{title}</Title>
    </Container>
  );
}
