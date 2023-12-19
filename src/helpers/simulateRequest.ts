import { httpTypes } from "../data/httpTypes";
import {
  SimulateConfig,
  SimulatedAxiosError,
  SimulatedAxiosSuccess,
} from "../types/index.types";

/**
 * The `simulateRequest` function simulates an error or success response from an Axios request with a
 * configurable delay.
 * @param config - The `config` parameter is an object that contains the following properties:
 * @returns The function `simulateRequest` returns a promise that resolves to either a
 * `SimulatedAxiosError<T>` or a `SimulatedAxiosSuccess<T>`.
 */
const simulateRequest = <T>(
  config: SimulateConfig<T>
): Promise<SimulatedAxiosError<T> | SimulatedAxiosSuccess<T>> => {
  const {
    response = {},
    request = {},
    status = 500,
    delayResponse = 1000,
    method,
    endpoint,
    headers,
  } = config;

  return new Promise<SimulatedAxiosError<T> | SimulatedAxiosSuccess<T>>(
    (resolve, reject) => {
      setTimeout(() => {
        if (status >= 400) {
          const errorResponse: SimulatedAxiosError<T> = {
            isAxiosError: true,
            name: "AxiosError",
            message: httpTypes[status] || "Unknown Error",
            response: {
              status: status,
              statusText: httpTypes[status] || "Unknown Error",
            },
            request: {
              method,
              url: endpoint,
              headers,
              data: request,
            },
          };
          reject(errorResponse);
        } else {
          resolve({
            status,
            statusText: "OK",
            data: response as T,
            headers,
            request: {
              method,
              url: endpoint,
              headers,
              data: request,
            },
          });
        }
      }, delayResponse);
    }
  );
};

export { simulateRequest };
