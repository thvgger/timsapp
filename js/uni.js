document.addEventListener('DOMContentLoaded', function() {
    const schoolList = document.getElementById('schoolList');
    const schools = [
        {
            id: 1,
            name: "University of Bradford",
            description: "Oakridge Academy is known for excellence and innovation. Our dedicated faculty and state-of-the-art facilities provide an enriching learning environment for students to thrive and reach their full potential.",
            logoUrl: "https://www.dementiaresearcher.nihr.ac.uk/wp-content/uploads/2022/07/University-of-Bradford-logo-e1658477146978.jpg"
        },

        {
            id: 2,
            name: "Riga State Technical University",
            description: "Oakridge Academy is known for excellence and innovation. Our dedicated faculty and state-of-the-art facilities provide an enriching learning environment for students to thrive and reach their full potential.",
            logoUrl: "https://banner2.cleanpng.com/20180904/stu/kisspng-riga-technical-university-university-of-latvia-mas-1713944124301.webp"
        },

        {
            id: 3,
            name: "University of Latvia",
            description: "Oakridge Academy is known for excellence and innovation. Our dedicated faculty and state-of-the-art facilities provide an enriching learning environment for students to thrive and reach their full potential.",
            logoUrl: "https://i0.wp.com/grandroyal.lk/wp-content/uploads/2024/04/uni_lat.jpg?resize=400%2C391&amp;ssl=1"
        },

        {
            id: 4,
            name: "Vistula University",
            description: "Oakridge Academy is known for excellence and innovation. Our dedicated faculty and state-of-the-art facilities provide an enriching learning environment for students to thrive and reach their full potential.",
            logoUrl: "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_200/dpr_2.0/element/11/112258_afib-logo-header-en.png"
        },

        {
            id: 5,
            name: "Warsaw University of Technology",
            description: "Oakridge Academy is known for excellence and innovation. Our dedicated faculty and state-of-the-art facilities provide an enriching learning environment for students to thrive and reach their full potential.",
            logoUrl: "https://study.gov.pl/sites/default/files/styles/logo_study/public/pw_logo_czarne_0.png?itok=9QUesPBP"
        },

        {
            id: 6,
            name: "University of Warsaw",
            description: "Oakridge Academy is known for excellence and innovation. Our dedicated faculty and state-of-the-art facilities provide an enriching learning environment for students to thrive and reach their full potential.",
            logoUrl: "https://www.eduopinions.com/wp-content/uploads/2017/09/University-of-Warsaw-UW-logo-350x250.png"
        },

        {
            id: 7,
            name: "University of Wrocław",
            description: "Oakridge Academy is known for excellence and innovation. Our dedicated faculty and state-of-the-art facilities provide an enriching learning environment for students to thrive and reach their full potential.",
            logoUrl: "https://cdn.adscientificindex.com/logos/11584.jpg"
        },
        
        
    ];



    schools.forEach(school => {
        const schoolElement = document.createElement('div');
        schoolElement.className = 'school';
        schoolElement.innerHTML = `
            <div class="school-header" role="button" aria-expanded="false" aria-controls="school-info-${school.id}">
                <div class="school-header-content">
                    <img src="${school.logoUrl}" alt="${school.name} Logo" class="school-logo">
                    <h2>${school.name}</h2>
                </div>
                <span class="arrow" aria-hidden="true">&#9660;</span>
            </div>
            <div id="school-info-${school.id}" class="school-info">
                <p class="blacktxt">${school.description}</p>
                <br>
            </div>
        `;
        schoolList.appendChild(schoolElement);
    });




    schoolList.addEventListener('click', function(e) {
        const header = e.target.closest('.school-header');
        if (!header) return;

        const currentlyActive = schoolList.querySelector('.school-header.active');
        if (currentlyActive && currentlyActive !== header) {
            toggleSchool(currentlyActive, false);
        }

        toggleSchool(header, !header.classList.contains('active'));
    });

    function toggleSchool(header, isActive) {
        header.classList.toggle('active', isActive);
        header.setAttribute('aria-expanded', isActive);

        const info = header.nextElementSibling;
        if (isActive) {
            info.style.maxHeight = info.scrollHeight + 'px';
            info.style.padding = '20px';
        } else {
            info.style.maxHeight = null;
            info.style.padding = '0 20px';
        }
    }
});
