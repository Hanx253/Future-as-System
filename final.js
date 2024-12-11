fetch('data.json')
    .then(response => response.json())
    .then(data => {
            const finalData = data.final;

            const homeIcon = document.querySelector('.home-icon');
            homeIcon.src = data.homeIcon;

            const contentContainer = document.querySelector('.content-placeholder');

            const title = document.createElement('h1');
            title.textContent = finalData.title;
            contentContainer.appendChild(title);
   
            finalData.videos.forEach(video => {
                const videoTitle = document.createElement('h2');
                videoTitle.textContent = video.title;
                contentContainer.appendChild(videoTitle);

                const levelDescription = document.createElement('p');
                levelDescription.textContent = video.description;
                contentContainer.appendChild(levelDescription);

                // const imageElement = document.createElement('img');
                // imageElement.src = video.url;
                // imageElement.alt = video.title;
                // imageElement.classList.add('section-image');
                // contentContainer.appendChild(imageElement);

                const videoElement = document.createElement('video');
                videoElement.src = video.url;
                videoElement.alt = video.title; // This is optional as 'alt' isn't used for <video>.
                videoElement.classList.add('final-video');
                videoElement.controls = true; // Add controls for video playback
                contentContainer.appendChild(videoElement);

                const linkElement = document.createElement('a');
                linkElement.href = video.link;
                linkElement.textContent = 'Game Demo';
                linkElement.target = '_blank'; // Open in a new tab
                contentContainer.appendChild(linkElement);
            });
        })