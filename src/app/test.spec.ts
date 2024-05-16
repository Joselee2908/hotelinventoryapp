import { Calculator } from './test.service';

describe('test.service', () => {
  it('should add 2 numbers', () => {
    const service = new Calculator();
    expect(service.add(2, 2)).toBe(4);
  });

  it('should substract 2 numbers', () => {
    const service = new Calculator();
    expect(service.substract(6, 2)).toBe(4);
  });
});
