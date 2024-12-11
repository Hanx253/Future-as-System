fetch('data.json')
    .then(response => response.json())
    .then(data => {

        document.querySelector('.title-placeholder').textContent = data.title;
        document.querySelector('.subtitle-placeholder').textContent = data.subtitle;


        const linksContainer = document.querySelector('.links-placeholder');
        data.links.forEach(link => {
            const pageLink = document.createElement('a');
            pageLink.textContent = link.text;
            pageLink.href = link.url;
            linksContainer.appendChild(pageLink);
        });
    })