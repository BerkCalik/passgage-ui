export * from './Common';
export * from './Theme';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
