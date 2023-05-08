import submitImg from '../../assets/icon-arrow.svg';
import { useBirthday } from '../../context/useBirthday';
import { DateInput } from '../DateInput';
import { Container, Form, Line, Submit, SubmitButton } from './styles';

export function Header() {
  const { birthday, setDay, setMonth, setYear } = useBirthday();

  return (
    <Container>
      <Form>
        <DateInput label="DAY" value={birthday.day} update={setDay} />
        <DateInput label="MONTH" value={birthday.month} update={setMonth} />
        <DateInput label="YEAR" value={birthday.year} update={setYear} />
      </Form>
      <Submit>
        <Line />
        <SubmitButton>
          <img src={submitImg} />
        </SubmitButton>
      </Submit>
    </Container>
  );
}
