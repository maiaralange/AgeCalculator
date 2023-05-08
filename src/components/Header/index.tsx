import submitImg from '../../assets/icon-arrow.svg';
import { DateInput } from '../DateInput';
import { Container, Form, Line, Submit, SubmitButton } from './styles';

export function Header() {
  return (
    <Container>
      <Form>
        <DateInput label="DAY"></DateInput>
        <DateInput label="MONTH"></DateInput>
        <DateInput label="YEAR"></DateInput>
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
