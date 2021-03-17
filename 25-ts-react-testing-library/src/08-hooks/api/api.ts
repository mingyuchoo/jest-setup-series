// timeout=0 to simulate mocked api responses
const loadFromApi = (): Promise<unknown> => new Promise((resolve) => setTimeout(resolve, 0));

export default loadFromApi;
