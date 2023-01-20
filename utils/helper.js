import moment from "moment/moment";

export function getTimeAgo(datetime) {
  // datetime is in the format of 2021-05-05 12:00:00
  return moment(datetime).fromNow();
}
