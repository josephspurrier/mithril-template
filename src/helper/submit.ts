let disabled = false;
const submitText = 'Submitting...';

export const start = function (event: { preventDefault: () => void }): void {
  event.preventDefault();
  disabled = true;
};

export const finish = function (): void {
  disabled = false;
};

export const text = function (s: string): string {
  return !disabled ? s : submitText;
};
