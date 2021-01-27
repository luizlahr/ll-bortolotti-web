import { format, parseISO } from "date-fns";

export const formatMoney = (amount: number, language: string = 'pt-BR', money: string = 'BRL'): string => {
  return new Intl.NumberFormat(language, { style: 'currency', currency: money }).format(amount);
}

export const formatDate = (date: string | number | Date, defaultFormat: string = 'dd/MM/yyyy'): string => {
  if (!date) return;

  if (typeof date === 'string') {
    date = parseISO(date);
  }

  return format(date, defaultFormat);
}