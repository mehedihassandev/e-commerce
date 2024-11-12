import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react';

type NotificationContextType = (message: string, severity: boolean) => void;

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    );
  }

  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<boolean>(false);

  const showNotification: NotificationContextType = useCallback(
    (newMessage, newSeverity) => {
      setMessage(newMessage);
      setSeverity(newSeverity);
      setOpen(true);
    },
    []
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity ? 'error' : 'success'}>
          {message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};
