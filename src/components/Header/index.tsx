import { FormEvent, useState } from 'react';
import submitImg from '../../assets/icon-arrow.svg';
import { useAge } from '../../context/useAge';
import { DateInput } from '../DateInput';
import { Container, Form, Line, Submit, SubmitButton } from './styles';

export function Header() {
  const { calculateAge } = useAge();
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    calculateAge(Number(day), Number(month), Number(year));
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Form>
        <DateInput label="DAY" placeholder="DD" value={day} update={setDay} />
        <DateInput
          label="MONTH"
          placeholder="MM"
          value={month}
          update={setMonth}
        />
        <DateInput
          label="YEAR"
          placeholder="YYYY"
          value={year}
          update={setYear}
        />
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
