const CAREER_START_YEAR = 2018;
const ANNIVERSARY_MONTH = 8; // September (0-indexed)

export function getYearsOfExperience(now: Date = new Date()): number {
  const years = now.getFullYear() - CAREER_START_YEAR;
  return now.getMonth() >= ANNIVERSARY_MONTH ? years : years - 1;
}
