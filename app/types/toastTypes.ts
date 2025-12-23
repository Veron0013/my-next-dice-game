export enum AlertTitleValue {
  LOST = 'You lost',
  WON = 'You won',
}

export enum AlertSeverity {
  success = 'success',
  error = 'error',
}
export type AlertState = {
  message?: string;
  severity: AlertSeverity;
  titleText: AlertTitleValue;
};
