export function delay(time: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, time);
  });
}
