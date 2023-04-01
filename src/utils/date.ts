import dayjs from 'dayjs';

export const formatDateByYear = (date: string) => {
  const curr = dayjs();
  const d = dayjs(date);

  if (d.get('y') !== curr.get('y')) {
    return d.format('YYYY년 M월 D일');
  }

  return d.format('M월 D일');
};
