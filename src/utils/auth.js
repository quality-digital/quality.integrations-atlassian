import btoa from 'btoa';

const username = process.env.USER_NAME;
const apiToken = process.env.CONFLUENCE_TOKEN;

function generateAuthHeader() {
    const authString = `${username}:${apiToken}`;
    return `Basic ${btoa(authString)}`;
}

export { generateAuthHeader };
