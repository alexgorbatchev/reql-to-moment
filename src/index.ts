import * as moment from "moment";

export interface IRethinkDBRawTime {
  $reql_type$: string;
  epoch_time: number;
  timezone: string;
};

export default function reqlToMoment(value: IRethinkDBRawTime): moment.Moment {
  if (!value || value.$reql_type$ !== "TIME") {
    throw new Error("Expecting a ReQL raw time object");
  }

  return moment(`${value.epoch_time} ${value.timezone}`, "X Z");
}
