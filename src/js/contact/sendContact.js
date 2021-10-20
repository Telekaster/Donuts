export default function sendContactForm(mail, text) {

    const question = {
        author: mail.toLowerCase(),
        content: text.value,
    };

    const url = 'https://jsonplaceholder.typicode.com/posts';

    const options = {
        method: 'POST',
        body: JSON.stringify(question),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(url, options).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((eror) => {
        console.log(eror);
    });
};