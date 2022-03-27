console.log('Hello')

document.addEventListener('DOMContentLoaded', (event) => {

    // BASIC DOM MANIPULATION
    // https://developer.mozilla.org/en-US/docs/Web/API/Event

    // console.log('on DOMContentLoaded', event)
    // console.log(document.querySelectorAll(".container"));
    // console.log(document.querySelector("#people-container"))

    // const peopleContainer = document.querySelector("#people-container");
    // peopleContainer.classList.add('people-wrapper');
    // peopleContainer.setAttribute('customAttribute', 'customValue');
    //
    // const paragraph = document.createElement('p');
    // paragraph.textContent = 'this is people paragraph';
    // peopleContainer.append(paragraph);
    // peopleContainer.style.cssText = 'border: 1px solid black; cursor: pointer';
    //
    // peopleContainer.addEventListener('click', (event) => {
    //     console.log('click', event)
    // });
    // BASIC DOM MANIPULATION END

    // OLD SCHOOL REQUEST
    // // Create new XMLHttpRequest() object to communicate with server layer
    // const request = new XMLHttpRequest();
    // // open() defines method type and specific URL of api that we want to communicate with
    // request.open('GET', 'http://swapi.dev/api/people/?page=1');
    // // send() execute the defined request
    // request.send();
    // // wait for request results and set listener to deal with the data
    // request.addEventListener('load', function(){
    //     const response = JSON.parse(this.responseText)
    //     console.log(response);
    // });
    // OLD SCHOOL REQUEST END

    fetch(`http://swapi.dev/api/people/?page=1`)
        .then(response => response.json())
        .then(response => {
            // console.log(response);
            renderPeoplePaginator(response['count']);
            renderPeopleList(response['results']);
        });

    function renderPeoplePaginator(count) {
        const pages = Math.ceil(count / 10);
        const select = document.getElementById('people-pagination');
        for (let i = 1; i <= pages; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.innerText = i;
            select.append(option);
        }
    }

    function renderPeopleList(people) {
        const peopleHtmlElems = people.map((person, index) => getPersonLayout(person, index))
        const peopleList = document.querySelector('#people-container');
        peopleHtmlElems.forEach(elem => peopleList.append(elem));
    }

    function getPersonLayout(person, index) {
        const root = getPersonRoot();
        root.append(getPersonProp('', person['name']));
        root.append(getPersonProp('Birth Year: ', person['birth_year'], index));
        root.append(getPersonProp('Skin: ', person['skin_color'], index));
        root.append(getPersonProp('Hair: ', person['hair_color'], index));
        root.append(getPersonButton(index));
        return root;
    }

    function getPersonRoot() {
        const root = document.createElement('div');
        root.classList.add('container-item');
        return root;
    }

    function getPersonProp(title, property, index) {
        const prop = document.createElement('div');
        prop.classList.add('card-title');
        if (index !== undefined) {
            prop.classList.add(`person-toggle-prop-${index}`);
        }
        prop.innerText = `${title}${property}`;
        return prop;
    }

    function getPersonButton(index) {
        const button = document.createElement('button');
        button.id = `person-details-button-${index}`;
        button.classList.add('person-details-button');
        button.innerText = 'Details';
        button.addEventListener('click', () => {
            const props = document.querySelectorAll(`.person-toggle-prop-${index}`);
            props.forEach(prop => {
                if (prop.classList.contains('hidden')) {
                    prop.classList.remove('hidden');
                } else {
                    prop.classList.add('hidden');
                }
            });
        });
        return button;
    }

    // HTML element basic class manipulation
    const chameleonButton = document.getElementById('chameleon-button');
    chameleonButton.addEventListener('click', () => {
        if (chameleonButton.classList.contains('button-blank')) {
            chameleonButton.classList.remove('button-blank');
            chameleonButton.classList.add('button-green');
            return;
        }
        if (chameleonButton.classList.contains('button-green')) {
            chameleonButton.classList.remove('button-green');
            chameleonButton.classList.add('button-yellow');
            return;
        }
        if (chameleonButton.classList.contains('button-yellow')) {
            chameleonButton.classList.remove('button-yellow');
            chameleonButton.classList.add('button-red');
            return;
        }
        if (chameleonButton.classList.contains('button-red')) {
            chameleonButton.classList.remove('button-red');
            chameleonButton.classList.add('button-blank');
            return;
        }
    });

    const onHoverButton = document.getElementById('on-hover-button');
    onHoverButton.addEventListener('mouseenter', () => {
        onHoverButton.classList.remove('button-blank')
        onHoverButton.classList.add('button-hover');
    });
    onHoverButton.addEventListener('mouseleave', () => {
        onHoverButton.classList.remove('button-hover');
        onHoverButton.classList.add('button-blank');
    });

    document.addEventListener('mousemove', (event) => {
        document.getElementById('mouse-position-x').value = event.x;
        document.getElementById('mouse-position-y').value = event.y;
    });

    const toggleButton = document.getElementById('toggle-button');
    const toggleContent = document.getElementById('toggle-content');
    toggleButton.addEventListener('click', () => {
        if (toggleContent.classList.contains('hide')) {
            toggleContent.classList.remove('hide');
        } else {
            toggleContent.classList.add('hide');
        }
    });
})

