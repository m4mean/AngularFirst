import { StudentportalModule } from './studentportal.module';

describe('StudentportalModule', () => {
  let studentportalModule: StudentportalModule;

  beforeEach(() => {
    studentportalModule = new StudentportalModule();
  });

  it('should create an instance', () => {
    expect(studentportalModule).toBeTruthy();
  });
});
