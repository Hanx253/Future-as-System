fetch('data.json')
    .then(response => response.json())
    .then(data => {
            const finalData = data.final;

            const homeIcon = document.querySelector('.home-icon');
            homeIcon.src = data.homeIcon;
        })
const vocabulary = { //Add terms and their meanings
    Dove: "The Dove represents the light of hope and harmony in the Rift. The Dove sect symbolizes peace, reverence for the sun, and a vision of unity. Their followers are known for their wisdom and self-restraint, often regarded as Seers by humanity. Yet, beneath their reputation lies a guarded secret: they, too, are Ultras, the very beings rejected and feared by human society. Despite their outward radiance, their mission to preserve and protect hides layers of complexity and contradiction.",
    Raven: "The Raven is the shadow of rebellion and vengeance in the Rift. This sect embodies resistance and dedication to the moon’s power. Their followers, known as Hexen, are driven by their pain and anger, standing as a stark contrast to the Dove's ideals. Their existence speaks to the unspoken rage of the exiled Ultras who refuse to accept a world that has cast them aside.",
    Script: "The Script is an enigmatic relic of prophecy and power, whispered to foretell the shape of the future. Found in an ancient altar deep within the Rift, it was said to be waiting for the arrival of those who could unlock its secrets. Fractured over the millennia, its scattered fragments have sparked a fierce race between the Dove and Raven, each seeking to unlock its power to overcome the other.",
    Rift: "The Rift is a land of Remote. This vast canyon, carved by a rushing river and surrounded by towering peaks, is home to Ultras. Far from human civilization, the Rift offers sanctuary and isolation.",
    Ultra: "Ultras are the extraordinary among the ordinary, holding elemental powers that set them apart from humanity. Yet their rarity comes at a cost. Rejected by human society, Ultras gather in the Rift, forging their lives in the shadows. To humans, Ultras are both mesmerizing and terrifying, beings whose existence challenges the natural order. Yet to themselves, they are survivors, each wrestling with the burden of their gifts.",
    MAGE: "MAGE is an academy where Ultras learn to master their powers before those powers consume them. It is a place of discipline and discovery, where the Dove guide their followers with a firm but gentle hand. Yet MAGE is more than an institution it is where the fragments of the Script are studied in secret. But for the Raven, MAGE is a symbol of exclusion, a reminder of the Dove’s dominance.",
    Seer: "The Seer is the wisest and most enlightened members of the Dove. They are visionaries who interpret the fragmented Script, wielding its knowledge to guide others. To humans, the Seers are revered as insightful sages, bringers of wisdom and light, their true nature as Ultras carefully hidden.",
    Hexen: "Hexen are the forsaken followers of the Raven. Many Hexen bear physical transformations—claws, horns, or other animalistic traits—that mark their struggle to control their abilities. To humans, they are monsters to be feared; to themselves, they are warriors of a just cause, embracing the chaos within as both a curse and a weapon in their fight against oppression."
};

const wordSelector = document.getElementById('word-selector'); //Add the dropdown menu element
const wordName = document.getElementById('word-name'); //Get the element to display the selected term's name
const wordDefinition = document.getElementById('word-definition'); //Get the element to display the selected term's definition

wordSelector.addEventListener('change', () => { //Listen for changes in the menu
    const selectedWord = wordSelector.value; //Get the selected term
    if (selectedWord) { //Check if a term is selected
        wordName.textContent = selectedWord; //Update to show the selected term's name
        wordDefinition.textContent = vocabulary[selectedWord]; //Update to show the selected term's definition
    }
});
