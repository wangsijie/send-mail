const core = require('@actions/core');
const sendMail = require('./send-mail');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const sk = core.getInput('sk');
    const to = core.getInput('to');
    const subject = core.getInput('subject');
    const content = core.getInput('content');
    
    const res = await sendMail(sk, to, subject, content);
    core.info(res);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
