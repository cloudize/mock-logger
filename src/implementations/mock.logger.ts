/* eslint-disable no-unused-vars */
import { ILogger, LoggerMessageType, LoggerPayload } from '@cloudize/logger';

// eslint-disable-next-line import/prefer-default-export
const MockLogger: ILogger = class {
  // eslint-disable-next-line no-undef
  static Write = jest.fn(async (
    type: LoggerMessageType,
    message: string,
    payload?: LoggerPayload,
    date?: Date,
  ): Promise<void> => {});
};

export default MockLogger;
