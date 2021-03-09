import { fetchDataByCallback, fetchDataByPromise, fetchDataByPromiseRejected } from './07-asynchronous';

describe('07-asynchronous', () => {
  // Callback - Dont' do this!
  // MISSED done callback
  it('Wroing - the data is peanut butter', () => {
    function callback(data: string) {
      expect(data).toBe('peanut butter');
    }
    fetchDataByCallback(callback);
  });

  // Callback - Do like this
  // SHOULD USE done callback
  it('Callback - the data is peanut butter', (done) => {
    function callback(data: string) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done();
      }
    }
    fetchDataByCallback(callback);
  });

  // Promise (using .then)
  // SHOULD BE return
  it('Promise .then - the data is peanut butter', () => {
    return fetchDataByPromise().then((data: string) => {
      expect(data).toBe('peanut butter');
      expect(data).toMatch('peanut butter');
    });
  });

  // Promise (using resolves)
  // SHOULD BE return
  it('Promise resolves - the data is peanut butter', () => {
    return expect(fetchDataByPromise()).resolves.toBe('peanut butter');
  });

  // Promise (using rejects)
  // SHOULD BE return
  it('Promise rejects - the data is peanut butter', () => {
    return expect(fetchDataByPromiseRejected()).rejects.toMatch('error');
  });

  // Async/Await
  it('Async/Await = the data is peanut butter', async () => {
    const data = await fetchDataByPromise();
    expect(data).toBe('peanut butter');
    expect(data).toMatch('peanut butter');
  });
});
