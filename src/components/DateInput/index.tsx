import { ChangeEvent } from 'react';
import { Container, Input, Title } from './styles';

interface DateInputProps {
  label: string;
  update: (value: number) => void;
  value: number;
}

export function DateInput({ label, update, value }: DateInputProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    update(value);
  }

  return (
    <Container>
      <Title>{label}</Title>
      <Input onChange={handleChange} value={value} />
    </Container>
  );
}
