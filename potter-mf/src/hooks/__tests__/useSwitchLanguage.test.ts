import { renderHook } from '@testing-library/react';
import useSwitchLanguage from '../useSwitchLanguage';

// Solo comprobamos que el hook devuelve una función
describe('useSwitchLanguage hook', () => {
  test('should return a function', () => {
    const { result } = renderHook(() => useSwitchLanguage());
    expect(typeof result.current).toBe('function');
  });
}); 