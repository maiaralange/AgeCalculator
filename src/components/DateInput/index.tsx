import { ComponentProps, ElementRef, forwardRef } from 'react';
import { DateType } from '../Header';
import { Container, ErrorMessage, Input, Title } from './styles';

export interface DateInputProps extends ComponentProps<typeof Input> {
  dateType: DateType;
  errorMessage?: string;
}

export const DateInput = forwardRef<ElementRef<typeof Input>, DateInputProps>(
  ({ dateType, errorMessage, ...props }, ref) => {
    const map: {
      [key in DateType]: {
        placeholder: string;
        label: string;
      };
    } = {
      [DateType.Day]: { placeholder: 'DD', label: 'DAY' },
      [DateType.Month]: { placeholder: 'MM', label: 'MONTH' },
      [DateType.Year]: { placeholder: 'YYYY', label: 'YEAR' }
    };

    return (
      <Container>
        <Title>{map[dateType].label}</Title>
        <Input ref={ref} placeholder={map[dateType].placeholder} {...props} />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Container>
    );
  }
);
