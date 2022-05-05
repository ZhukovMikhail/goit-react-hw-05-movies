import { toast } from 'react-toastify';

export const n = 2;

const errorId = 'error-id';
const warnId = 'warn-id';
const redirId = 'redir-id';

export const errorNotify = () =>
  toast.error('Nothing found...', {
    toastId: errorId,
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  });

export const warnNotify = () =>
  toast.warn(' No data entered', {
    toastId: warnId,
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

export const error404Notify = message =>
  toast.error(`${message}`, {
    toastId: errorId,
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  });

export const redirectNotify = () =>
  toast.warn(' Redirected to /main', {
    toastId: redirId,
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
