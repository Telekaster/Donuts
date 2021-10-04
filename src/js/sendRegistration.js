export default function sendRegistration(name, phone, mail) {

    console.log('click');

    const registeredPerson = {
        author: name.value.toLowerCase(),
        content: `tel:${phone.value}, mail:${mail.value}`,
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