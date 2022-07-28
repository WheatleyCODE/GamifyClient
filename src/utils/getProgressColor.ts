export function getProgressColor(percent: number): string {
  if (percent > 70) return '#dc3545';
  if (percent > 40) return '#ffeb34';
  return '#0d6efd';
}
