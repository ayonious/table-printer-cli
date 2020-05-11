import service from '../src/service';

describe('Testing Error inputs', () => {
  it('input: valid', () => {
    service(
      '[{ "index":3, "text":"I would like some gelb bananen bitte", "value":200 }, { "index":4, "text":"I hope batch update is working", "value":300   } ]'
    );
  });

  it('input: invalid: not an array', () => {
    service('{"a": 1}');
  });
});
