const aliyun = require('waliyun');

async function sendMail(sk, to, subject, content) {
    if (!sk) {
        throw new Error('SK is missing');
    }
    if (!to) {
        throw new Error('To address is missing');
    }
    if (!subject) {
        throw new Error('Subject is missing');
    }

    const client = aliyun.DM({
        AccessKeyId: 'LTAI4G9zjuok4VPjuadqMxFp',
        AccessKeySecret: sk,
    });

    return await client.singleSendMail({
        AccountName: 'noreply@notice.sijie.wang',
        ReplyToAddress: false,
        AddressType: 1,
        ToAddress: to,
        FromAlias: '王思捷',
        Subject: subject,
        HtmlBody: content || '',
    });
}

module.exports = sendMail;
