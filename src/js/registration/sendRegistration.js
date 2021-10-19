export default function sendRegistration(name, phone, mail) {

    const registeredPerson = {
        author: name.toLowerCase(),
        content: `tel:${phone}, mail:${mail}`,
    };

    console.log(registeredPerson);

    const url = 'https://jsonplaceholder.typicode.com/posts';

    const options = {
        method: 'POST',
        body: JSON.stringify(registeredPerson),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(url, options).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
};