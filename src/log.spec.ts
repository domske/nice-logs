import { Log } from './log';

let result: any;
console.log = (...args: any[]) => {
  result = args.join(' ');
};

test('With timestamp', () => {
  Log.title('This is a title log.');
  expect(result).toBe('%cThis is a title log.%c font-size: 1.5rem color: #ffce00');

  Log.info('This is an info message.');
  expect(result).toContain(
    '] background: #3880ff; color: #ffffff; border-radius: 3px; padding: 0 5px color: #ffce00 This is an info message.'
  );
  Log.warn('This is a warn message.');
  expect(result).toContain(
    '] background: #ffce00; color: #ffffff; border-radius: 3px; padding: 0 5px color: #ffce00 This is a warn message.'
  );
  Log.error('This is an error message.');
  expect(result).toContain(
    '] background: #f04141; color: #ffffff; border-radius: 3px; padding: 0 5px color: #ffce00 This is an error message.'
  );
  Log.success('This is a success message.');
  expect(result).toContain(
    '] background: #10dc60; color: #ffffff; border-radius: 3px; padding: 0 5px color: #ffce00 This is a success message.'
  );

  Log.info();
  expect(result).toContain('] background: #3880ff; color: #ffffff; border-radius: 3px; padding: 0 5px color: #ffce00');
});

test('Without timestamp', () => {
  Log.timeStampEnabled = false;

  Log.title('This is a title log.');
  expect(result).toBe('%cThis is a title log.%c font-size: 1.5rem color: #ffce00');
  Log.info('This is an info message.');
  expect(result).toBe(
    '%cINFO%c background: #3880ff; color: #ffffff; border-radius: 3px; padding: 0 5px color: #ffce00 This is an info message.'
  );
  Log.warn('This is a warn message.');
  expect(result).toBe(
    '%cWARN%c background: #ffce00; color: #ffffff; border-radius: 3px; padding: 0 5px color: #ffce00 This is a warn message.'
  );
  Log.error('This is an error message.');
  expect(result).toBe(
    '%cERROR%c background: #f04141; color: #ffffff; border-radius: 3px; padding: 0 5px color: #ffce00 This is an error message.'
  );
  Log.success('This is a success message.');
  expect(result).toBe(
    '%cOK%c background: #10dc60; color: #ffffff; border-radius: 3px; padding: 0 5px color: #ffce00 This is a success message.'
  );
});
