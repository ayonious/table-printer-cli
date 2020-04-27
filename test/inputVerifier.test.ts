import inputVerifier from '../src/inputVerifier';

describe('Testing Error inputs', () => {
  it(`JSON input: invalid`, function () {
    expect(
      inputVerifier(
        '[{ "index":3 "text":"I would like some gelb bananen bitte", "value":200 }, { "index":4, "text":"I hope batch update is working", "value":300   } ]'
      )
    ).toBe(false);
  });

  it(`input: valid`, function () {
    expect(
      inputVerifier(
        '[{ "index":3, "text":"I would like some gelb bananen bitte", "value":200 }, { "index":4, "text":"I hope batch update is working", "value":300   } ]'
      )
    ).toBe(true);
  });
});
