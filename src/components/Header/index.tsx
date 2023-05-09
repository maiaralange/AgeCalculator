import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import submitImg from '../../assets/icon-arrow.svg';
import { useAge } from '../../context/useAge';
import { DateInput } from '../DateInput';
import { Container, Form, Line, Submit, SubmitButton } from './styles';

export enum DateType {
  Day,
  Month,
  Year
}

interface FormInput {
  day: number;
  month: number;
  year: number;
}

const birthdaySchema = z.object({
  day: z.coerce
    .number()
    .int()
    .positive({ message: 'Must be a valid day' })
    .min(1, { message: 'Must be a valid day' })
    .max(31, { message: 'Must be a valid day' }),
  month: z.coerce
    .number()
    .int()
    .positive({ message: 'Must be a valid month' })
    .min(1, { message: 'Must be a valid month' })
    .max(12, { message: 'Must be a valid month' }),
  year: z.coerce
    .number()
    .int()
    .positive({ message: 'Must be a valid year' })
    .max(new Date().getFullYear(), { message: 'Must be a valid year' })
});

export function Header() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({ resolver: zodResolver(birthdaySchema) });
  const { calculateAge } = useAge();

  function submit(data: FormInput) {
    calculateAge(data.day, data.month, data.year);
  }

  return (
    <Container onSubmit={handleSubmit(submit)}>
      <Form>
        <DateInput
          dateType={DateType.Day}
          errorMessage={errors.day?.message}
          {...register('day')}
        />
        <DateInput
          dateType={DateType.Month}
          errorMessage={errors.month?.message}
          {...register('month')}
        />
        <DateInput
          dateType={DateType.Year}
          errorMessage={errors.year?.message}
          {...register('year')}
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
