import { Alert, AlertTitle } from '@mui/material';
import { AlertSeverity, AlertTitleValue } from '../types/toastTypes';

interface Props {
  severity: AlertSeverity;
  titleText: AlertTitleValue;
  message?: string;
}

export default function ToastMessage({ message, severity, titleText }: Props) {
  return (
    <Alert
      severity={severity}
      variant="filled"
      sx={{
        borderRadius: '4px',
        width: '600px',
        fontSize: '16px',
      }}
    >
      <AlertTitle>{titleText}</AlertTitle>
      {message}
    </Alert>
  );
}
