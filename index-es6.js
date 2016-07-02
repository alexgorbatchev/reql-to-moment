import moment from 'moment';

export default function reqlToMoment(value) {
  if (!value || value.$reql_type$ !== 'TIME') {
    throw new Error('Expecting a ReQL raw time object');
  }

  return moment(`${value.epoch_time} ${value.timezone}`, 'X Z');
}
