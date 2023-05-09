import { ComponentProps, ElementRef, forwardRef } from 'react';
import { DateType } from '../Header';
import { Container, ErrorMessage, Input, Title } from './styles';

export interface DateInputProps extends ComponentProps<typeof Input> {
  dateType: DateType;
  hasError?: boolean;
  errorMessage?: string;
}

export const DateInput = forwardRef<ElementRef<typeof Input>, DateInputProps>(
  ({ dateType, hasError, errorMessage, ...props }, ref) => {
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
      <Container error={String(hasError)}>
        <Title>{map[dateType].label}</Title>
        <Input ref={ref} placeholder={map[dateType].placeholder} {...props} />
        {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Container>
    );
  }
);
