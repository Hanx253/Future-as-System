fetch('data.json') //Get data from json file
    .then(response => response.json()) //Convert response
    .then(data => {
        const processData = data.process; //Extract the 'process' object from the json data

        const homeIcon = document.querySelector('.home-icon'); //Select the element with home-icon class
        homeIcon.src = data.homeIcon; //Set the source of the home icon from json

        const contentContainer = document.querySelector('.content-placeholder'); //Find the placeholder container to add content

        //Create and append a title to the content container
        const title = document.createElement('h1'); //Create a <h1> element
        title.textContent = processData.title; //Set the text content from json
        contentContainer.appendChild(title); //Add the title to the container

        processData.sections.forEach(section => { //Loop each section in the 'sections' array

            if (section.subtitle) { //Add a subtitle if it exists in the section
                const sectionSubtitle = document.createElement('h2'); //Create a <h2> element
                sectionSubtitle.textContent = section.subtitle; //Set the subtitle text from json
                sectionSubtitle.classList.add('section-subtitle'); //Add a class
                contentContainer.appendChild(sectionSubtitle); //Add the subtitle to the container
            }

            if (section.icon) {
                const iconImage = document.createElement('img');
                iconImage.src = section.icon;
                iconImage.classList.add('section-icon');
                contentContainer.appendChild(iconImage);
            }

            const sectionContent = document.createElement('p');
            sectionContent.textContent = section.content;
            sectionContent.classList.add('section-content');
            contentContainer.appendChild(sectionContent);

            if (section.image) {
                const sectionImage = document.createElement('img');
                sectionImage.src = section.image;
                sectionImage.classList.add('section-image');
                contentContainer.appendChild(sectionImage);
            }

            if (section.video) {
                const sectionVideo = document.createElement('video'); //Create a <video> element
                sectionVideo.src = section.video; //Set the video source from the JSON
                sectionVideo.controls = true; //Enable video controls
                sectionVideo.classList.add('section-video'); //Add a class
                contentContainer.appendChild(sectionVideo); //Add the video to the container
            }

        });
    })
