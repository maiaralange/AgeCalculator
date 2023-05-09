import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import submitImg from '../../assets/icon-arrow.svg';
import { daysPerMonth, useAge } from '../../context/useAge';
import { DateInput } from '../DateInput';
import { Container, Form, Line, Submit, SubmitButton } from './styles';

dayjs.extend(isLeapYear);

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

const birthdaySchema = z
  .object({
    day: z.coerce
      .number()
      .min(1, { message: 'Must be a valid day' })
      .max(31, { message: 'Must be a valid day' }),
    month: z.coerce
      .number()
      .min(1, { message: 'Must be a valid month' })
      .max(12, { message: 'Must be a valid month' }),
    year: z.coerce
      .number()
      .positive({ message: 'Must be a valid year' })
      .max(new Date().getFullYear(), { message: 'Must be in the past' })
  })
  .refine((date) => isValidDate(date), {
    message: 'Must be a valid date',
    path: ['date']
  })
  .refine(
    (date) => {
      const birthday = dayjs(`${date.year}-${date.month}-${date.day}`);
      const today = dayjs();
      return birthday.isBefore(dayjs(today));
    },
    { message: 'Must be a date in the past', path: ['date'] }
  );

const isValidDate = (date: FormInput) => {
  const daysInThatMonth = isFebruaryAndLeapYear(date)
    ? 29
    : daysPerMonth[date.month - 1];
  return date.day <= daysInThatMonth;
};

const isFebruaryAndLeapYear = (date: FormInput) => {
  const birthday = dayjs(`${date.year}-${date.month}-01`);
  return date.month == 2 && birthday.isLeapYear();
};

export function Header() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput & { date: string }>({
    resolver: zodResolver(birthdaySchema)
  });
  const { calculateAge, clearAge } = useAge();

  function submit(data: FormInput) {
    calculateAge(data.day, data.month, data.year);
  }

  return (
    <Container onSubmit={handleSubmit(submit, clearAge)}>
      <Form>
        <DateInput
          dateType={DateType.Day}
          hasError={Boolean(errors.day?.message || errors.date?.message)}
          errorMessage={errors.day?.message || errors.date?.message}
          {...register('day')}
        />
        <DateInput
          dateType={DateType.Month}
          hasError={Boolean(errors.month?.message || errors.date?.message)}
          errorMessage={errors.month?.message}
          {...register('month')}
        />
        <DateInput
          dateType={DateType.Year}
          hasError={Boolean(errors.year?.message || errors.date?.message)}
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
