import { FormEvent, useState } from 'react';
import submitImg from '../../assets/icon-arrow.svg';
import { useAge } from '../../context/useAge';
import { DateInput } from '../DateInput';
import { Container, Form, Line, Submit, SubmitButton } from './styles';

export function Header() {
  const { calculateAge } = useAge();
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    calculateAge(day, month, year);
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Form>
        <DateInput label="DAY" value={day} update={setDay} />
        <DateInput label="MONTH" value={month} update={setMonth} />
        <DateInput label="YEAR" value={year} update={setYear} />
      </Form>
      <Submit>
        <Line />
        <SubmitButton type="submit">
          <img src={submitImg} />
        </SubmitButton>
      </Submit>
    </Container>
  );
}
