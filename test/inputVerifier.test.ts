import inputVerifier from '../src/inputVerifier';

describe('Testing Error inputs', () => {
  it(`number of arguments: invalid`, function () {
    expect(inputVerifier(['1', '1', '1', '1'])).toBe(false);
    expect(inputVerifier(['1', '1'])).toBe(false);
    expect(inputVerifier(['1'])).toBe(false);
  });

  it(`JSON input: invalid`, function () {
    expect(
      inputVerifier([
        '1',
        '1',
        '[{ "index":3 "text":"I would like some gelb bananen bitte", "value":200 }, { "index":4, "text":"I hope batch update is working", "value":300   } ]',
      ])
    ).toBe(false);
  });

  it(`JSON input: not array`, function () {
    expect(
      inputVerifier([
        '1',
        '1',
        '{ "index":3, "text":"I would like some gelb bananen bitte", "value":200 }',
      ])
    ).toBe(false);
  });

  it(`input: valid`, function () {
    expect(
      inputVerifier([
        '1',
        '1',
        '[{ "index":3, "text":"I would like some gelb bananen bitte", "value":200 }, { "index":4, "text":"I hope batch update is working", "value":300   } ]',
      ])
    ).toBe(true);
  });
});
