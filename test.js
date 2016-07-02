import { expect } from 'chai';
import moment from 'moment-timezone';
import reqlToMoment from './index-es6';

describe('reql-to-moment', () => {
  it('expects ReQL object', () => {
    expect(() => reqlToMoment({})).to.throw(/Expecting a ReQL raw time object/);
  });

  it('converts moment to ReQL', () => {
    const expected = moment.tz('10/10/2010 10:00', 'DD/MM/YYYY hh:mm', 'America/Los_Angeles');
    const actual = reqlToMoment({
      $reql_type$: 'TIME',
      epoch_time: 1286730000,
      timezone: '-07:00',
    });

    expect(expected.isSame(actual)).to.be.ok;
  });
});
