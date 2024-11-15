document.addEventListener('DOMContentLoaded', function() {
    const schoolList = document.getElementById('schoolList');
    const schoolNames = [
        "Oakridge Academy", "Riverside High", "Evergreen Elementary",
        "Maple Grove School", "Sunnydale Prep", "Westfield College",
        "Pinecrest Institute", "Meadowbrook High", "Fairview Elementary",
        "Hillcrest Academy", "Lakeshore High", "Elmwood School",
        "Brookside Prep", "Cedar Ridge High", "Willow Creek Elementary",
        "Redwood Academy", "Silver Lake High", "Golden Valley School",
        "Harmony Heights", "Crescent Moon Prep", "Stonebridge Academy",
        "Whispering Pines High", "Rosewood Elementary", "Beacon Hill School",
        "Ivy League Prep"
    ];

    const schools = schoolNames.map((name, i) => ({
        id: i + 1,
        name: name,
        description: `${name} is known for excellence and innovation. Our dedicated faculty and state-of-the-art facilities provide an enriching learning environment for students to thrive and reach their full potential.`
    }));

    schools.forEach(school => {
        const schoolElement = document.createElement('div');
        schoolElement.className = 'school';
        schoolElement.innerHTML = `
            <div class="school-header" role="button" aria-expanded="false" aria-controls="school-info-${school.id}">
                <div class="school-header-content">
                    <div class="school-logo" aria-hidden="true">${school.name.charAt(0)}</div>
                    <h2>${school.name}</h2>
                </div>
                <span class="arrow" aria-hidden="true">&#9660;</span>
            </div>
            <div id="school-info-${school.id}" class="school-info">
                <p style"color:#000">${school.description}</p>
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
