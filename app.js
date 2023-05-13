
const submitButton = document.querySelector('#submit')

async function getMessage() {

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
