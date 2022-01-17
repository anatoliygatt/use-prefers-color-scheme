import MatchMediaMock from 'jest-matchmedia-mock';
import { renderHook, act } from '@testing-library/react-hooks';
import { renderHook as renderHookOnServer } from '@testing-library/react-hooks/server';
import { usePrefersColorScheme } from '../usePrefersColorScheme';

describe('usePrefersColorScheme', () => {
  let matchMedia: MatchMediaMock;

  beforeEach(() => {
    matchMedia = new MatchMediaMock();
  });

  test("returns 'light' when light color scheme is preferred", () => {
    matchMedia.useMediaQuery('(prefers-color-scheme: light)');
    const { result } = renderHook(() => usePrefersColorScheme());
    expect(result.current).toBe('light');
  });

  test("returns 'dark' when dark color scheme is preferred", () => {
    matchMedia.useMediaQuery('(prefers-color-scheme: dark)');
    const { result } = renderHook(() => usePrefersColorScheme());
    expect(result.current).toBe('dark');
  });

  test('responds to the change in color scheme preference', () => {
    matchMedia.useMediaQuery('(prefers-color-scheme: light)');
    const { result } = renderHook(() => usePrefersColorScheme());
    expect(result.current).toBe('light');
    act(() => {
      matchMedia.useMediaQuery('(prefers-color-scheme: dark)');
    });
    expect(result.current).toBe('dark');
  });

  test('removes media query event listener on unmount', () => {
    const { unmount } = renderHook(() => usePrefersColorScheme());

    const mediaQueries = matchMedia.getMediaQueries();
    expect(mediaQueries).toHaveLength(1);

    const mediaQuery = mediaQueries[0] as string;
    expect(matchMedia.getListeners(mediaQuery)).toHaveLength(1);
    unmount();
    expect(matchMedia.getListeners(mediaQuery)).toHaveLength(0);
  });

  test("returns 'light' when rendered on the server", () => {
    const { result } = renderHookOnServer(() => usePrefersColorScheme());
    expect(result.current).toBe('light');
  });

  test("returns 'dark' when rendered on the server with ssr=true", () => {
    const { result } = renderHookOnServer(() =>
      usePrefersColorScheme({ ssr: true })
    );
    expect(result.current).toBe('dark');
  });

  test("returns 'light' when window.matchMedia is not supported and ssr=true", () => {
    matchMedia.destroy();
    const { result } = renderHook(() => usePrefersColorScheme({ ssr: true }));
    expect(result.current).toBe('light');
  });
});
