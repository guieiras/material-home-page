import { format, parseISO } from 'date-fns';
import React from 'react';

interface ComponentProps {
  startDate?: string;
  endDate?: string;
  i18n: Record<string, unknown>;
}

export default function DateComponent({ startDate, endDate, i18n }: ComponentProps): JSX.Element {
  return (
    <>
      {startDate && format(parseISO(startDate), 'MMM/yy', { locale: i18n.locale })} -{' '}
      {endDate ? format(parseISO(endDate), 'MMM/yy', { locale: i18n.locale }) : i18n.current}
    </>
  );
}
