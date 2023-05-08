import { Container, Input, Title } from './styles';

interface DateInputProps {
  label: string;
}

export function DateInput({ label }: DateInputProps) {
  return (
    <Container>
      <Title>{label}</Title>
      <Input></Input>
    </Container>
  );
}
