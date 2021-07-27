const apiKey = 'U4m6rr3k7lM5C38LdMojvQ5Rydktm6nR';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
const request = fetch(url);

request
    .then(resp => resp.json())
    .then(({ data }) => {
        const {url}=data.images.original;
        const img=document.createElement('img');
        img.src=url;
        document.body.append(img);
    })
    .catch(console.warn);
