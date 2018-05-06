/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

import moment from 'moment-jalaali';

export const Utils = {
  START_DATE: 'START_DATE',
  END_DATE: 'END_DATE',
  WEEKDAYS: [
    'ش',
    'ی',
    'د',
    'س',
    'چ',
    'پ',
    'ج'
  ],
  WEEKDAYS_MON: [
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنج شنبه',
    'جمعه',
    'شنبه',
    'یکشنبه',
  ],
  MONTHS: [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند'
  ],
  MAX_ROWS: 7,
  MAX_COLUMNS: 7,
  getDaysInMonth: function(month, year) {
    return moment.jDaysInMonth(year, month);
  },
  compareDates: function(date1, date2) {
    if (parseInt(date1.jDate()) !== parseInt(date2.jDate())) {
      return false;
    }

    if (parseInt(date1.jMonth()) !== parseInt(date2.jMonth())) {
      return false;
    }

    if (parseInt(date1.jYear()) !== parseInt(date2.jYear())) {
      return false;
    }

    return true;
  },
  isDateInRange: function (currentDate, startDate, endDate) {
    if (currentDate > startDate && currentDate < endDate) {
      return true;
    }

    return false;
  },
  // converts Jalali moment to timestamp
  // i.e new Date().getTime()
  getTime: function (jDate) {
    return new Date(jDate.format('YYYY-M-D HH:mm:ss')).getTime();
  }
};
