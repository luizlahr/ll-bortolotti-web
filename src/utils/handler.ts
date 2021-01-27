import { AxiosError } from "axios";
import { toast } from "react-toastify";

// interface StandardError {
//   message?: string;
//   status?: number;
// }

const render500 = (message: string = undefined) => {
  toast.error(message || 'Ocorreu um erro inesperado! Por favor tente novamente mais tarde.');
}

export const handler = (error: AxiosError) => {

  const data = error?.response?.data;

  if (!error.response || data.status === 500) {
    render500(data?.message);
  }
}
