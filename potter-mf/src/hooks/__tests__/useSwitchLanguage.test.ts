import { renderHook, RenderHookResult } from '@testing-library/react';
import useSwitchLanguage from '../useSwitchLanguage';

// Definimos el tipo del hook
type SwitchLanguageHook = () => (language: string) => void;

// Solo comprobamos que el hook devuelve una función
describe('useSwitchLanguage hook', () => {
  test('should return a function', (): void => {
    const { result }: RenderHookResult<ReturnType<SwitchLanguageHook>, unknown> = renderHook(() => useSwitchLanguage());
    expect(typeof result.current).toBe('function');
  });
}); 