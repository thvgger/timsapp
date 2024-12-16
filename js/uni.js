document.addEventListener('DOMContentLoaded', function() {
    const schoolList = document.getElementById('schoolList');
    const schools = [
        {
            id: 1,
            name: "University of Bradford",
            description: "The University of Bradford is a public research university located in the city of Bradford, West Yorkshire, England.",
            logoUrl: "https://www.dementiaresearcher.nihr.ac.uk/wp-content/uploads/2022/07/University-of-Bradford-logo-e1658477146978.jpg",
            site: "https://www.bradford.ac.uk"
        },

        {
            id: 2,
            name: "Riga Technical University",
            description: " Riga Technical University is the oldest technical university in the Baltic countries established on October 14, 1862. It is located in Riga, Latvia and was previously known as 'Riga Polytechnical Institute' and 'Riga Polytechnicum.",
            logoUrl: "https://banner2.cleanpng.com/20180904/stu/kisspng-riga-technical-university-university-of-latvia-mas-1713944124301.webp",
            site: "https://www.rtu.lv"
        },

        {
            id: 3,
            name: "University of Latvia",
            description: "University of Latvia is a public research university located in Riga, Latvia. The university was established in 1919 https://www.lu.lv/en/",
            logoUrl: "https://i0.wp.com/grandroyal.lk/wp-content/uploads/2024/04/uni_lat.jpg?resize=400%2C391&amp;ssl=1",
            site: "https://www.lu.lv/en"
        },

        {
            id: 4,
            name: "Vistula University",
            description: "Vistula University in Warsaw means prestige, an innovative model of education, guarantee of high-quality education, practice orientated approach and many years of experience in conducting online studies. With us, you will gain all the knowledge you really need and the qualifications that employers are really looking for. We will prepare you for the future.",
            logoUrl: "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_200/dpr_2.0/element/11/112258_afib-logo-header-en.png",
            site:"https://vistula.edu.pl/en"
        },

        {
            id: 5,
            name: "Warsaw University of Technology",
            description: "The Warsaw University of Technology is one of the leading institutes of technology in Poland and one of the largest in Central Europe. It employs 2,453 teaching faculty, with 357 professors. The student body numbers 36,156, mostly full-time.",
            logoUrl: "https://study.gov.pl/sites/default/files/styles/logo_study/public/pw_logo_czarne_0.png?itok=9QUesPBP",
            site: " https://eng.pw.edu.pl"
        },

        {
            id: 6,
            name: "University of Warsaw",
            description: "The University of Warsaw is a public research university in Warsaw, Poland. Established on November 19, 1816, it is the largest institution of higher learning in the country, offering 37 different fields of study as well as 100 specializations in humanities, technical, and natural sciences.",
            logoUrl: "images/schoollogo/warsaw.svg",
            site:""
        },

        {
            id: 7,
            name: "University of Wrocław",
            description: "The University of Wrocław is a public research university in Wrocław, Poland. It is the largest institution of higher learning in the Lower Silesian Voivodeship, with over 100,000 graduates since 1945.",
            logoUrl: "https://www.eduopinions.com/wp-content/uploads/2017/09/University-of-Warsaw-UW-logo-350x250.png",
            site:"https://uwr.edu.pl"
        },

        {
            id: 8,
            name: "Brest State Technical University",
            description: "Brest State Technical University s situated in Brest, Belarus. It began as Brest State Civil Engineering Institute on April 1, 1966, that was reorganized into Brest State Polytechnic Institute in 1989 and eventually into a university in 2000.",
            logoUrl: "images/schoollogo/breststateuni.png",
            site: "https://www.bstu.by"
        },

        {
            id: 9,
            name: "Belarusian State University",
            description: "BSU is the largest national research centre. BSU researchers' developments are widely used in medicine, space technology, IT, and other branches. ",
            logoUrl: "images/schoollogo/belarusian.jpg",
            site:"https://bsu.by"
        },

        {
            id: 10,
            name: "York St John University",
            description: "York St John University is a high quality, friendly university with a campus based in the centre of the historic City of York. ",
            logoUrl: "images/schoollogo/york.jpg",
            site: "https://www.yorksj.ac.uk/"
        },

        {
            id: 11,
            name: "Sheffield Hallam University",
            description: "Sheffield Hallam University is a public research university in Sheffield, South Yorkshire, England. The university is based on two sites; the City Campus is located in the city centre near Sheffield.",
            logoUrl: "images/schoollogo/sheffield.jpg",
            site:"https://www.shu.ac.uk/"
        },

        {
            id: 12,
            name: "Coventry University",
            description: "Coventry University is a public research university in Coventry, England. The origins of Coventry University can be linked to the founding of the Coventry School of Design in 1843.",
            logoUrl: "images/schoollogo/coventry.jpg",
            site:" https://www.coventry.ac.uk"
        },

        {
            id: 13,
            name: "University Of Brighton",
            description: "University Of Brighton: From small beginnings in 1850s Brighton, the University of Brighton has grown to a complex and diverse institution based in two locations across the south coast of England",
            logoUrl: "images/schoollogo/brighton.jpg",
            site:"https://www.brighton.ac.uk/index.aspx"
        },

        {
            id: 14,
            name: "Birmingham City University",
            description: "Birmingham City University (BCU) is a large and diverse university set in the heart of Birmingham with a focus on practice-based learning.",
            logoUrl: "images/schoollogo/birmingham.jpg",
            site:"https://www.bcu.ac.uk/"
        },

        {
            id: 15,
            name: " University of Auckland",
            description: "The University of Auckland is a public research university based in Auckland, New Zealand. The institution was established in 1883 as a constituent college of the University of New Zealand. Initially located in a repurposed courthouse, the university has grown substantially over the years.",
            logoUrl: "images/schoollogo/auckland.jpg",
            site:"https://www.auckland.ac.nz/en.html"
        },

        {
            id: 16,
            name: " University of Malta",
            description: "The University of Malta (Maltese: L-Università ta' Malta, UM, formerly UOM) is a higher education institution in Malta. It offers undergraduate bachelor's degrees, postgraduate master's degrees and postgraduate doctorates. It is a member of the European University Association, the European Access Network, Association of Commonwealth Universities, the Utrecht Network, the Santander Network, the Compostela Group, the European Association for University Lifelong Learning (EUCEN) and the International Student Exchange Programme (ISEP).",
            logoUrl: "images/schoollogo/malta.jpg",
            site:"https://www.um.edu.mt"
        },

        {
            id: 17,
            name: "University of Luxembourg",
            description: "The University of Luxembourg is a world-class research university. It strives for excellence in both fundamental and applied research, and in education. ",
            logoUrl: "images/schoollogo/luxemburg.jpg",
            site:"https://www.uni.lu/en/"
        },

        {
            id: 18,
            name: "University of Bordeaux",
            description: "The University of Bordeaux is a major multidisciplinary research university, with deep regional roots that reach out to the international level.",
            logoUrl: "images/schoollogo/bordeaux.jpg",
            site:"https://www.u-bordeaux.fr/en"
        },

        {
            id: 19,
            name: "Technical University of Denmark",
            description: "As a DTU student, you get hands-on access to world-class facilities, and you engage in project-based assignments, offering you the chance to apply your theoretical knowledge to solve real-life problems.",
            logoUrl: "images/schoollogo/denmark.jpg",
            site:"https://www.dtu.dk/english/"
        },
        
        {
            id: 20,
            name: "University of Helsinki",
            description: "The University of Helsinki is a public university in Helsinki, Finland. The university was founded in Turku in 1640 as the Royal Academy of Åbo under the Swedish Empire, and moved to Helsinki in 1828 under the sponsorship of Tsar Alexander I.",
            logoUrl: "images/schoollogo/helsinki.jpg",
            site:"https://www.helsinki.fi/en"
        },

        {
            id: 21,
            name: "Tallinn University",
            description: "Tallinn University is the largest university of humanities and social sciences in Tallinn and the third biggest public university in Estonia.",
            logoUrl: "images/schoollogo/talin.jpg",
            site:" https://www.tlu.ee/en"
        }


        
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
                <p class="blacktxt">${school.description} <a href="${school.site}">${school.site}</a></p>
                
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
