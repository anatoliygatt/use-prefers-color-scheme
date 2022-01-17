import { getProjectName } from '../index';

describe('getProjectName', () => {
  test("returns current project's name", () => {
    const projectName = getProjectName();
    expect(projectName).toBe('use-prefers-color-scheme');
  });
});
