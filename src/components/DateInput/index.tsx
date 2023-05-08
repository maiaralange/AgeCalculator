import { Container, Input, Title } from './styles';

interface DateInputProps {
  label: string;
  placeholder: string;
  update: (value: string) => void;
  value: string;
}

export function DateInput({
  label,
  placeholder,
  update,
  value
}: DateInputProps) {
  return (
    <Container>
      <Title>{label}</Title>
      <Input
        onChange={(event) => update(event.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </Container>
  );
}
