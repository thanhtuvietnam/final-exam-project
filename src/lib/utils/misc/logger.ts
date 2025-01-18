// utils/logger.ts
// import pino from 'pino';
// import NextLogger from 'next-logger';
//
// const logger = pino({
//   level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
//   transport:
//     process.env.NODE_ENV !== 'production'
//       ? {
//           target: 'pino-pretty',
//           options: {
//             colorize: true,
//             translateTime: 'SYS:standard',
//             ignore: 'pid,hostname',
//           },
//         }
//       : (undefined as any),
// });
//
// export default NextLogger(logger);

// utils/logger.ts với pino
import pino, { Logger } from 'pino';

export const logger: Logger =
  process.env['NODE_ENV'] === 'production'
    ? // JSON in production
      pino({ level: 'warn' })
    : // Pretty print in development
      pino({
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            ignore: 'pid,hostname',
          },
        },
        level: 'debug',
      });
