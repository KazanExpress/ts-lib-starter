import MyLib from '../src';

describe('MyLib', () => {
  it('instantiate', () => {
    const instance = new MyLib();

    expect(instance).toBeInstanceOf(MyLib);
  });
});
