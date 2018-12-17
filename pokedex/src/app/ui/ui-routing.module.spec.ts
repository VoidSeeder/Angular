import { UiRoutingModule } from './ui.routing.module';

describe('UiRoutingModule', () => {
  let uiRoutingModule: UiRoutingModule;

  beforeEach(() => {
    uiRoutingModule = new UiRoutingModule();
  });

  it('should create an instance', () => {
    expect(uiRoutingModule).toBeTruthy();
  });
});
