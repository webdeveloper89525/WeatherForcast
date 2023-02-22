import { MONTHS, DAYS } from './DateConstants';

export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );
  return days;
}

export function getWeekDay(date = new Date()) {
  console.log('date: ', date);
  const dayInAWeek = date.getDay();
  return DAYS[dayInAWeek];
}

export function getDayMonthFromDate(date = new Date()) {
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getUTCDate();

  return day + ' ' + month;
}

export function transformDateFormat(date = new Date()) {
  const month = date.toLocaleString('en-US', { month: '2-digit' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  const newFormatDate = year.toString().concat('-', month, '-', day, ' ', time);
  return newFormatDate;
}

export function getUTCDatetime(date = new Date()) {
  const utcTime = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

  const isoDateString = new Date().toISOString();
  const utcDate = isoDateString.split('T')[0].concat(' ', utcTime);
  return utcDate;
}

export function getUTCTime(date = new Date()) {
  const utcTime = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  return utcTime;
}
