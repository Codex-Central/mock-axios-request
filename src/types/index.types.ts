export type Config = {
  endpoint: string;
  status: number;
  headers?: object[];
  request?: any;
  response: any;
  delayResponse?: number;
};

export type SimulatedAxiosSuccess<T = any> = {
  status: number;
  statusText: string;
  data: T;
  headers: object;
  request?: {
    status?: number;
    method: string;
    url: string;
    headers: object;
    data: any;
  };
};

export type SimulatedAxiosError<T = any> = {
  isAxiosError: true;
  name: string;
  message: string;
  response?: {
    status: number;
    statusText: string;
    data?: T;
    headers?: any;
    config?: any;
  };
  request?: {
    status?: number;
    method: string;
    url: string;
    headers: any;
    data: any;
  };
};

export type SimulateConfig<T = any> = {
  status: number;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  endpoint: string;
  headers: any;
  request: any;
  response: T;
  delayResponse?: number;
};
