const sendMail = require('./send-mail');
const process = require('process');
const cp = require('child_process');
const path = require('path');

test('throws sk is missing', async () => {
  await expect(sendMail()).rejects.toThrow('SK is missing');
});

test('throws to is missing', async () => {
  await expect(sendMail('testsk')).rejects.toThrow('To address is missing');
});

test('throws subject is missing', async () => {
  await expect(sendMail('testsk', 'i@sijie.wang')).rejects.toThrow('Subject is missing');
});

test('test runs', () => {
  // process.env['INPUT_SK'] is given by env
  process.env['INPUT_TO'] = 'woaipingpu@qq.com';
  process.env['INPUT_SUBJECT'] = 'Hello Github Action!';
  process.env['INPUT_CONTENT'] = 'It works!';
  const ip = path.join(__dirname, 'index.js');
  console.log(cp.execSync(`node ${ip}`, { env: process.env }).toString());
})
