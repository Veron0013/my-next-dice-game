import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { AlertSeverity, AlertTitleValue } from '../types/toastTypes';

interface Props {
  open: boolean;
  onClose: () => void;
  severity: AlertSeverity;
  titleText: AlertTitleValue;
  message?: string;
}

export default function ToastMessage({
  open,
  onClose,
  severity,
  titleText,
  message,
}: Props) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Alert
        severity={severity}
        variant="filled"
        sx={{ width: 400 }}
        onClose={onClose}
      >
        <AlertTitle>{titleText}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
}
