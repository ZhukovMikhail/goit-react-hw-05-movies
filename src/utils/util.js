import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const n = 4;

const errorId = 'error-id';
const warnId = 'warn-id';

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

//   const toastId = React.useRef(null);

//   function handleUpload() {
//     axios
//       .request({
//         method: 'post',
//         url: '/foobar',
//         data: myData,
//         onUploadProgress: p => {
//           const progress = p.loaded / p.total;

//           // check if we already displayed a toast
//           if (toastId.current === null) {
//             toastId.current = toast('Upload in Progress', { progress });
//           } else {
//             toast.update(toastId.current, { progress });
//           }
//         },
//       })
//       .then(data => {
//         // Upload is done!
//         // The remaining progress bar will be filled up
//         // The toast will be closed when the transition end
//         toast.done(toastId.current);
//       });
//   }
