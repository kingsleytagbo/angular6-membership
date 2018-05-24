import { ApproutesModule } from './approutes.module';

describe('ApproutesModule', () => {
  let approutesModule: ApproutesModule;

  beforeEach(() => {
    approutesModule = new ApproutesModule();
  });

  it('should create an instance', () => {
    expect(approutesModule).toBeTruthy();
  });
});
