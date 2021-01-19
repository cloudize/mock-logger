import { ILogger, LoggerMessageType, LoggerPayload } from '@apigames/logger';

// eslint-disable-next-line import/prefer-default-export
const MockLogger: ILogger = class {
  // eslint-disable-next-line no-undef,no-unused-vars,max-len
  static Write = jest.fn(async (type: LoggerMessageType, message: string, payload?: LoggerPayload, date?: Date): Promise<void> => {})
};

export default MockLogger;
