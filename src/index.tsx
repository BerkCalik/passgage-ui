export * from './Common';
import ShiftCreate from './Shift/Create';

export { ShiftCreate };

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
