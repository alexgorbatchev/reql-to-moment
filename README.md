# reql-to-moment

[![GratiPay](https://img.shields.io/gratipay/user/alexgorbatchev.svg)](https://gratipay.com/alexgorbatchev/)
![Downloads](https://img.shields.io/npm/dm/reql-to-moment.svg)
![Version](https://img.shields.io/npm/v/reql-to-moment.svg)

A helper function to convert raw ReQL time object to moment.js preserving time zone information. This is useful for reading raw time objects from RethinkDB.

## Installation

`reql-to-moment` expects that you have already installed `moment`.

```
npm instal --save-dev reql-to-moment
```

## Usage

```js
import reqlToMoment from 'reql-to-moment';

reqlToMoment({
  $reql_type$: 'TIME',
  epoch_time: 1286730000,
  timezone: '-07:00',
});
// returns moment.js object
```

## License

ISC