import { LoggerMessageType } from '@apigames/logger';
import { MockLogger } from '../../src';

afterEach(() => {
  jest.resetAllMocks();
});

describe('The Mock Logger', () => {
  it('should Write an Error to the console when called', async () => {
    await MockLogger.Write(LoggerMessageType.Error, 'Test message');
    expect(MockLogger.Write).toHaveBeenCalledTimes(1);
    expect(MockLogger.Write).toHaveBeenCalledWith(LoggerMessageType.Error, 'Test message');
  });

  it('should Write an Error with a payload to the console when called', async () => {
    global.console.log = jest.fn();

    const payload = { name: 'value' };

    await MockLogger.Write(LoggerMessageType.Error, 'Test message', payload);
    expect(MockLogger.Write).toHaveBeenCalledTimes(1);
    expect(MockLogger.Write).toHaveBeenCalledWith(LoggerMessageType.Error, 'Test message', payload);
  });
});
