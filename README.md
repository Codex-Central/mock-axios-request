# MockAxiosRequest
Functions to allow test the request and responses in Axios format.

## Installation

> `npm install --save @types/node`


### Attributes of MockApiClientConfig

```json
{
  endpoint: '/users', // Mandatory 
  status: 200, // Mandatory (100 to 599)
  headers: [], // optional
  response: [], // optional
  response: [], // optional
  delayResponse: 1000, // optional (default: 1000 - in milliseconds)
}
```


## Usage
### Importing and creating a new instance

```javascript
import { MockApiClient, MockApiClientConfig } from 'mock-axios-request';

const baseUrl = 'https://example.com/api';
const mockApi = new MockApiClient(baseUrl);
```

 
### Mocking a request
#### GET

```javascript
try {
  const config: MockApiClientConfig = {
    endpoint: '/users',
    status: 200, // Change this for the status you want to test
    response: [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' },
      { id: 4, name: 'User 4' },
    ],
  };
  const data = await mockApi.get<[{ id: string; name: string }]>(config);
  console.log('Data:', data);
} catch (error) {
  console.error('Error:', error);
}
```

#### POST

```javascript
try {
  const config: MockApiClientConfig = {
    endpoint: '/users',
    status: 201, // Change this for the status you want to test
    response: { id: 5, name: 'User 5' },
  };
  const data = await mockApi.post<{ id: string; name: string }>(config);
  console.log('Data:', data);
} catch (error) {
  console.error('Error:', error);
}
```

#### PUT

```javascript
try {
  const config: MockApiClientConfig = {
    endpoint: '/users/5',
    status: 200, // Change this for the status you want to test
    response: { id: 5, name: 'User 5' },
  };
  const data = await mockApi.put<{ id: string; name: string }>(config);
  console.log('Data:', data);
} catch (error) {
  console.error('Error:', error);
}
```

#### DELETE

```javascript
try {
  const config: MockApiClientConfig = {
    endpoint: '/users/5',
    status: 200, // Change this for the status you want to test
    response: { id: 5, name: 'User 5' },
  };
  const data = await mockApi.delete<{ id: string; name: string }>(config);
  console.log('Data:', data);
} catch (error) {
  console.error('Error:', error);
}
```

# Credits
These code was written by [Roberto Silva Z.](https://www.linkedin.com/in/robertosilvazuniga/), 