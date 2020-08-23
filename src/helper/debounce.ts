const m = new Map<string, ReturnType<typeof setTimeout>>();

export const debounce = (
  id: string,
  func: () => void,
  timeout: number,
): void => {
  const timer = m.get(id);
  if (timer) {
    clearTimeout(timer);
  }
  m.set(id, setTimeout(func, timeout));
};
