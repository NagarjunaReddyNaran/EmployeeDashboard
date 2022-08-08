import { DeptNamePipe } from './dept-name.pipe';

describe('DeptNamePipe', () => {
  it('create an instance', () => {
    const pipe = new DeptNamePipe();
    expect(pipe).toBeTruthy();
  });
});
