// Responsive Nav


const btnBar = document.getElementsByClassName('bar')[0];

const navigation = document.getElementsByClassName('navContainer')[0];

btnBar.addEventListener('click', function(){
    if(navigation.style.height === '350px'){
        navigation.style.height = '70px';
    }else{
        navigation.style.height = '350px';
    }
})

function handleResize(){
    if(window.innerWidth > 870){
        navigation.style.height = '70px';}
    // }else{
    //     navigation.style.height = '250px';
    // }
}
window.addEventListener('resize', handleResize);
handleResize();

// === SWITCHING MODE ====
const switching = document.getElementsByClassName('switch')[0];
const BoxDivs = document.querySelectorAll('.BoxDiv');
const texT = document.querySelectorAll('.words');
const BoxDivs2 = document.querySelectorAll('.BoxDivs2');
const BoxDivs3 = document.querySelectorAll('.BoxDivs3');

// Selecting the checkbox switch element
const modeToggle = document.getElementById('modeToggle');

// Selecting elements that need class toggles
const boxDivs = document.querySelectorAll('.BoxDiv');
const textElements = document.querySelectorAll('.words');

// Adding event listener to the toggle checkbox
modeToggle.addEventListener('change', function() {
    // Toggle activeDark/activeLight on each BoxDiv
    boxDivs.forEach(div => {
        div.classList.toggle('activeDark', modeToggle.checked);
        div.classList.toggle('activeLight', !modeToggle.checked);
    });

    BoxDivs2.forEach(div => {
        div.classList.toggle('activeContrast', modeToggle.checked);
        div.classList.toggle('activeLight', !modeToggle.checked);
    });

    BoxDivs3.forEach(div => {
        div.classList.toggle('activeContrast', modeToggle.checked);
        div.classList.toggle('lightGray', !modeToggle.checked);
    });

    // Toggle lightText/darkText on each words
    textElements.forEach(text => {
        text.classList.toggle('lightText', modeToggle.checked);
        text.classList.toggle('darkText', !modeToggle.checked);
    });
});

// --- Changing Fist Section Contents

// Responsive Nav


const info1 = [
    {
        link: 'Inspire',
        url: 'https://example.com/inspire',
        description: '37 Modern African Dress Style for summer',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        dot1: '#d4edec',
        dot2: '#8a8a8a',
        dot3: '#8a8a8a',
        dot4: '#8a8a8a',
        image: 'images/image1a.png'
    },
    {
        link: 'Explore Styles',
        url: 'https://example.com/styles',
        description: 'Discover trending styles for a modern look',
        comment: 'Trendy outfits for every occasion. Stand out with unique looks!',
        dot1: '#8a8a8a',
        dot2: '#d4edec',
        dot3: '#8a8a8a',
        dot4: '#8a8a8a',
        image: 'images/image2a.png'
    },
    {
        link: 'Summer Vibes',
        url: 'https://example.com/summer',
        description: 'Unveiling African Summer Styles',
        comment: 'Bright colors, light fabrics, and summer-ready styles.',
        dot1: '#8a8a8a',
        dot2: '#8a8a8a',
        dot3: '#d4edec',
        dot4: '#8a8a8a',
        image: 'images/image3a.png'
    },
    {
        link: 'Fashion Forward',
        url: 'https://example.com/fashion',
        description: 'Step up your fashion game with these ideas',
        comment: 'Inspired by African culture and summer vibes.',
        dot1: '#8a8a8a',
        dot2: '#8a8a8a',
        dot3: '#8a8a8a',
        dot4: '#d4edec',
        image: 'images/image4a.png'
    }
];

function rotateContent() {
    let currentIndex = 0;

    function updateContent() {
        const currentContent = info1[currentIndex];

        // Add fade-out effect before changing content
        document.querySelectorAll('.bigTitles, .comment, .imgFirst, .dot').forEach(element => {
            element.classList.add('fade');
        });

        setTimeout(() => {
            // Update HTML elements with current content after fade-out
            document.querySelector('.bigTitles').textContent = currentContent.description;
            document.querySelector('.comment').textContent = currentContent.comment;
            document.getElementsByClassName('dot')[0].style.backgroundColor = currentContent.dot1;
            document.getElementsByClassName('dot')[1].style.backgroundColor = currentContent.dot2;
            document.getElementsByClassName('dot')[2].style.backgroundColor = currentContent.dot3;
            document.getElementsByClassName('dot')[3].style.backgroundColor = currentContent.dot4;
            document.querySelector('.imgFirst').src = currentContent.image;

            const linkElement = document.querySelector('.discover');
            linkElement.textContent = currentContent.link;
            linkElement.href = currentContent.url;

            // Remove fade-out effect to trigger fade-in
            document.querySelectorAll('.bigTitles, .comment, .imgFirst, .dot').forEach(element => {
                element.classList.remove('fade');
            });

            // Increment the index, resetting to 0 if it exceeds array length
            currentIndex = (currentIndex + 1) % info1.length;
        }, 400); // Delay to allow elements to fade out
    }

    // Display the first item immediately
    updateContent();

    // Set the interval for content rotation
    setInterval(updateContent, 6000); // Changes every 6 seconds
}

// Start rotating content on window load
window.addEventListener('load', rotateContent);

// ===== Automatic % section ===========


const info2 = [
    {
        link: 'Inspire',
        url: 'https://example.com/inspire',
        description: '37 Modern African Dress Style for summer',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        dot1: '#d4edec',
        dot2: '#8a8a8a',
        dot3: '#8a8a8a',
        image: 'images/image1a.png'
    },
    {
        link: 'Explore Styles',
        url: 'https://example.com/styles',
        description: 'Discover trending styles for a modern look',
        comment: 'Trendy outfits for every occasion. Stand out with unique looks!',
        dot1: '#8a8a8a',
        dot2: '#d4edec',
        dot3: '#8a8a8a',
        image: 'images/image2a.png'
    },
    {
        link: 'Fashion Forward',
        url: 'https://example.com/fashion',
        description: 'Step up your fashion game with these ideas',
        comment: 'Inspired by African culture and summer vibes.',
        dot1: '#8a8a8a',
        dot2: '#8a8a8a',
        dot3: '#d4edec',
        image: 'images/image4a.png'
    }
];

function rotateContent2() {
    let currentIndex2 = 0;

    function updateContent2() {
        const currentContent2 = info2[currentIndex2];

        // Add fade-out effect before changing content
        document.querySelectorAll('.moveTitle, .backInfive, .doting').forEach(element => {
            element.classList.add('fade');
        });

        setTimeout(() => {
            // Update HTML elements with current content after fade-out
            document.querySelector('.moveTitle').textContent = currentContent2.description;
            document.querySelector('.doting').style.backgroundColor = currentContent2.dot1;
            document.querySelectorAll('.doting')[1].style.backgroundColor = currentContent2.dot2;
            document.querySelectorAll('.doting')[2].style.backgroundColor = currentContent2.dot3;
            document.querySelector('.backInfive').style.backgroundImage = `url('${currentContent2.image}')`;

            const linkElement2 = document.querySelector('.moveLink');
            linkElement2.textContent = currentContent2.link;
            linkElement2.href = currentContent2.url;

            // Remove fade-out effect to trigger fade-in
            document.querySelectorAll('.moveTitle, .backInfive, .doting').forEach(element => {
                element.classList.remove('fade');
            });

            // Increment the index, resetting to 0 if it exceeds array length
            currentIndex2 = (currentIndex2 + 1) % info2.length;
        }, 400); // Delay to allow elements to fade out
    }

    // Display the first item immediately
    updateContent2();

    // Set the interval for content rotation
    setInterval(updateContent2, 6000); // Changes every 6 seconds
}

// Start rotating content on window load
window.addEventListener('load', rotateContent2);










