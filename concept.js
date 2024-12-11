fetch('data.json')
    .then(response => response.json())
    .then(data => {
            const conceptData = data.concept;

            const homeIcon = document.querySelector('.home-icon');
            homeIcon.src = data.homeIcon;

            const contentContainer = document.querySelector('.content-placeholder');

            conceptData.sections.forEach(section => {
                const sectionTitle = document.createElement('h1');
                sectionTitle.textContent = section.title;
                contentContainer.appendChild(sectionTitle);

                if (section.content) {
                    const sectionContent = document.createElement('p');
                    sectionContent.textContent = section.content;
                    contentContainer.appendChild(sectionContent);
                }

                if (section.link) {
                    const sectionLink = document.createElement('a');
                    sectionLink.href = section.link.url;
                    sectionLink.textContent = section.link.text;
                    sectionLink.classList.add('section-link');
                    contentContainer.appendChild(sectionLink);
                }

                if (section.subsections) {
                    section.subsections.forEach(subsection => {
                        const subsectionTitle = document.createElement('h2');
                        subsectionTitle.textContent = subsection.subtitle;
                        contentContainer.appendChild(subsectionTitle);

                        const subsectionContent = document.createElement('p');
                        subsectionContent.textContent = subsection.content;
                        contentContainer.appendChild(subsectionContent);
                    });
                }
            });
        })