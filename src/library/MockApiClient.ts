import { simulateRequest } from "../helpers/simulateRequest";
import { Config } from "../types/index.types";

/**
 * The MockApiClient class is a TypeScript class that provides methods for making HTTP requests (GET,
POST, PUT, PATCH, DELETE) to a specified base URL. 
 * The MockApiClient class is used for testing purposes only.
 * @param {string} baseUrl - is the base URL for the API.
 * @returns an instance of the MockApiClient class.
 */
class MockApiClient {
  constructor(private baseUrl: string) {}

  /**
   * Asynchronous function that makes a GET request to a specified endpoint and
   * returns the response as a Promise.
   * @param {Config} config - is an object that contains various properties used for making the HTTP request.
   * @returns a Promise of type T.
   */
  async get<T>(config: Config): Promise<T> {
    const {
      endpoint,
      status,
      headers = [],
      request,
      response,
      delayResponse,
    } = config;
    const url = `${this.baseUrl}${endpoint}`;
    const responseRequest = await simulateRequest<T>({
      response,
      request,
      status,
      method: "GET",
      endpoint: url,
      headers,
      delayResponse,
    });

    return responseRequest as T;
  }

  /**
   * Asynchronous function that makes a POST request to a specified endpoint and
   * returns the response as a Promise.
   * @param {Config} config - is an object that contains various properties used for making the HTTP request.
   * @returns a Promise of type T.
   */
  async post<T>(config: Config): Promise<T> {
    const {
      endpoint,
      status,
      headers = [],
      request,
      response,
      delayResponse,
    } = config;
    const url = `${this.baseUrl}${endpoint}`;
    const responseRequest = await simulateRequest<T>({
      response,
      request,
      status,
      method: "POST",
      endpoint: url,
      headers,
      delayResponse,
    });

    return responseRequest as T;
  }

  /**
   * Asynchronous function that makes a PUT request to a specified endpoint and
   * returns the response as a Promise.
   * @param {Config} config - is an object that contains various properties used for making the HTTP request.
   * @returns a Promise of type T.
   */
  async put<T>(config: Config): Promise<T> {
    const {
      endpoint,
      status,
      headers = [],
      request,
      response,
      delayResponse,
    } = config;
    const url = `${this.baseUrl}${endpoint}`;
    const responseRequest = await simulateRequest<T>({
      response,
      request,
      status,
      method: "PUT",
      endpoint: url,
      headers,
      delayResponse,
    });

    return responseRequest as T;
  }

  /**
   * Asynchronous function that makes a PATCH request to a specified endpoint and
   * returns the response as a Promise.
   * @param {Config} config - is an object that contains various properties used for making the HTTP request.
   * @returns a Promise of type T.
   */
  async patch<T>(config: Config): Promise<T> {
    const {
      endpoint,
      status,
      headers = [],
      request,
      response,
      delayResponse,
    } = config;
    const url = `${this.baseUrl}${endpoint}`;
    const responseRequest = await simulateRequest<T>({
      response,
      request,
      status,
      method: "PATCH",
      endpoint: url,
      headers,
      delayResponse,
    });

    return responseRequest as T;
  }

  /**
   * Asynchronous function that makes a DELETE request to a specified endpoint and
   * returns the response as a Promise.
   * @param {Config} config - is an object that contains various properties used for making the HTTP request.
   * @returns a Promise of type T.
   */
  async delete<T>(config: Config): Promise<T> {
    const {
      endpoint,
      status,
      headers = [],
      request,
      response,
      delayResponse,
    } = config;
    const url = `${this.baseUrl}${endpoint}`;
    const responseRequest = await simulateRequest<T>({
      response,
      request,
      status,
      method: "DELETE",
      endpoint: url,
      headers,
      delayResponse,
    });

    return responseRequest as T;
  }
}

export default MockApiClient;
