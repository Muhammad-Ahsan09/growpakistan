const teamData = {
    ceo: {
        name: "Abdullah Muneer",
        title: "Executive Leader",
        photo: "../../images/photos/CEO.jpeg",
        bio: `Abdullah Muneer is the Founder and CEO of GROW PAKISTAN, one of Pakistan’s emerging youth-driven IT and education companies dedicated to empowering the next generation through technology, digital skills, and entrepreneurship. With a vision to bridge the gap between education and industry, he has led initiatives focused on digital transformation, professional training, and community development.

        As a young entrepreneur and leader, Abdullah Muneer is committed to creating opportunities for students and professionals by building impactful programs, strategic partnerships, and innovation-driven ecosystems. Under his leadership, GROW PAKISTAN continues to inspire and equip thousands of young individuals with the knowledge and skills needed to thrive in the digital economy.`,
        tags: ["Strategic Vision", "E-commerce Scalability", "Operations Scaling", "Public Relations"],
        quote: "Our mission is simple: to transform passive learners into active creators and business operators across Pakistan."
    },
    chairman: {
        name: "Mr. Mirza Muneer Akhtar",
        title: "Chairman",
        photo: "../../images/photos/chairman.jpeg",
        bio: `Mirza Muneer Akhtar is the Chairman of GROW PAKISTAN, a forward-thinking organization committed to empowering youth through education, technology, and innovation. With a strong vision for community development and sustainable growth, he provides strategic leadership and guidance to the organization’s initiatives and long-term objectives.

        As Chairman, Mirza Muneer Akhtar is dedicated to fostering opportunities that inspire young individuals to develop their skills, embrace innovation, and contribute meaningfully to society. Under his leadership and mentorship, GROW PAKISTAN continues to expand its impact by promoting digital transformation, professional development, and youth empowerment across Pakistan.`,
        tags: ["Governance", "Policy Architecture", "Ecosystem Strategy", "Community Anchoring"],
        quote: "Sustainable youth empowerment starts with robust institutional foundations and structural transparency."
    },
    president: {
        name: "Saif ur Rahman",
        title: "President",
        photo: "../../images/photos/president.jpeg",
        bio: `Saif Ur Rehman serves as the President of GROW PAKISTAN, where he leads organizational initiatives focused on youth empowerment, technology education, and professional development. With a passion for leadership and community impact, he plays a key role in driving the organization’s mission of equipping young people with the skills and opportunities needed to succeed in the modern world.

        As President, Saif Ur Rehman is committed to fostering innovation, strengthening partnerships, and creating meaningful programs that inspire positive change. Through his dedication and strategic leadership, GROW PAKISTAN continues to expand its reach and empower the next generation of leaders, innovators, and changemakers across Pakistan.`,
        tags: ["Program Alignment", "Mentorship Standards", "Executive Management"],
        quote: "Bridging the critical gap between conceptual education and real market performance metrics."
    },
    vp: {
        name: "Habibullah khan",
        title: "Vice president",
        photo: "../../images/photos/vice president.jpeg",
        bio: `Habibullah Khan serves as the Vice President of GROW PAKISTAN, playing a vital role in advancing the organization’s mission of empowering youth through technology, education, and leadership development. With a strong commitment to innovation and community engagement, he actively contributes to strategic planning, organizational growth, and the successful execution of impactful initiatives.

        As Vice President, Habibullah Khan is dedicated to fostering collaboration, supporting emerging talent, and creating opportunities that enable young individuals to achieve their full potential. Through his leadership and vision, he continues to strengthen GROW PAKISTAN’s efforts in building a skilled, innovative, and future-ready generation across Pakistan.`,
        tags: ["Regional Execution", "Chapter Synchronicity", "Internal Frameworks"],
        quote: "Decentralized growth guarantees that every single student gets equal access to elite digital training."
    },
    boardDirector: {
        name: "Muhammad Ahmad",
        title: "Board Director",
        photo: "../../images/photos/Board director.jpeg",
        bio: `TODO`,
        tags: ["Regional Execution", "Chapter Synchronicity", "Internal Frameworks"],
        quote: "Decentralized growth guarantees that every single student gets equal access to elite digital training."
    },
    ops: {
        name: "Muhammad Fahad",
        title: "Operations Director",
        photo: "../../images/photos/operations-director.jpeg",
        bio: `Muhammad Fahad serves as the Operations Director of GROW PAKISTAN, where he oversees organizational operations and ensures the effective execution of programs, projects, and strategic initiatives. With a strong focus on efficiency, coordination, and continuous improvement, he plays a pivotal role in driving the organization’s growth and operational excellence.
        As Operations Director, Muhammad Fahad is committed to building streamlined processes, fostering teamwork, and delivering impactful initiatives that empower youth through technology, education, and professional development. Through his dedication and leadership, he contributes significantly to GROW PAKISTAN’s mission of creating opportunities and developing a future-ready generation across Pakistan.`,
        tags: ["Asset Management", "Logistics Pipelines", "Tactical Infrastructure Control"],
        quote: "Flawless technical and logistical infrastructure creates an environment where students learn without friction."
    },
    gen: {
        name: "Abdul Rafay",
        title: "General Director",
        photo: "../../images/photos/general-director.jpeg",
        bio: `Abdul Rafay serves as the General Director of GROW PAKISTAN, where he provides strategic oversight and leadership to ensure the successful implementation of the organization's vision and objectives. With a strong commitment to innovation, organizational development, and youth empowerment, he plays a key role in guiding initiatives that create meaningful impact across communities.
        As General Director, Abdul Rafay is dedicated to strengthening institutional growth, fostering collaboration, and driving programs that equip young individuals with the knowledge, skills, and opportunities needed to excel in the digital era. Through his leadership and dedication, he contributes significantly to GROW PAKISTAN's mission of building a skilled, empowered, and future-ready generation across Pakistan.`,
        tags: ["Curriculum Integrity", "System Consistency", "Functional Team Audits"],
        quote: "Consistency is our hallmark. We maintain identical excellence across every masterclass and summit."
    },
    gennDir: {
        name: "Fatima Khalid",
        title: "General Director",
        photo: "../../images/photos/fatima-director-of-communication.jpeg",
        bio: "To Be Done",
        tags: ["Brand Narratives", "Public Communications Media", "Digital Interaction Interfaces"],
        quote: "The story of GROW PAKISTAN is written inside the career changes and scaling curves of our alumni."
    },
    dept: {
        name: "Muhammad Awais",
        title: "Department Leader",
        photo: "../../images/photos/department-leader.jpeg",
        bio: "To Be Done",
        tags: ["Cohort Navigation", "Practical Assignment Reviews", "Local Division Audits"],
        quote: "Theory can look perfect on paper; my target is verifying that your skills function in the real wild market."
    },
    pm: {
        name: "Laiba Javaid",
        title: "Project Manager",
        photo: "../../images/photos/project-manager.jpeg",
        bio: "To Be Done",
        tags: ["Critical Path Tracking", "Sprint Planning", "Cross-Functional Integration"],
        quote: "Turning complex educational initiatives into cleanly organized steps with zero missed dates."
    },
    campus1: {
        name: "Eman Haider",
        title: "Campus Leader",
        photo: "../../images/photos/campus-leader.jpeg",
        bio: "To Be Done",
        tags: ["Institutional Mobilization", "On-Campus Tech Workshops", "Local Student Ecosystems"],
        quote: "Igniting digital enterprise models directly within the undergraduate network."
    },
    campus2: {
        name: "Saim Sabir",
        title: "Campus Leader",
        photo: "../../images/photos/campus-leader2.jpeg",
        bio: "To Be Done",
        tags: ["Student Association Coordination", "On-Site Logistics", "Hackathon Architectures"],
        quote: "Transforming standard lecture halls into active operational labs for e-commerce."
    },
    campus3: {
        name: "Saifullah",
        title: "Campus Leader",
        photo: "../../images/photos/campus-leader3.jpeg",
        bio: "To Be Done",
        tags: ["Student Association Coordination", "On-Site Logistics", "Hackathon Architectures"],
        quote: "Transforming standard lecture halls into active operational labs for e-commerce."
    },
    campus4: {
        name: "Laiba Habib",
        title: "Campus Leader",
        photo: "../../images/photos/laiba-campus-leader.jpeg",
        bio: "To Be Done",
        tags: ["Student Association Coordination", "On-Site Logistics", "Hackathon Architectures"],
        quote: "Transforming standard lecture halls into active operational labs for e-commerce."
    },
    amb1: {
        name: "Iqra Ilyas",
        title: "Campus Ambassador",
        photo: "../../images/photos/campusambassador1.jpeg",
        bio: "To Be Done",
        tags: ["Peer Resource Networks", "Program Updates Distribution", "Candidate Sourcing"],
        quote: "Empowering fellow students to identify and grasp opportunities early in their academic life."
    },

    amb2: {
        name: "Ureen Jamil",
        title: "Campus Ambassador",
        photo: "../../images/photos/ureen-campus-ambassador.jpeg",
        bio: "To Be Done",
        tags: ["Peer Resource Networks", "Program Updates Distribution", "Candidate Sourcing"],
        quote: "Empowering fellow students to identify and grasp opportunities early in their academic life."
    },

    // amb3: {
    //     name: "Shazia Sattar",
    //     title: "Campus Ambassador",
    //     photo: "../../images/photos/shazia-campus-ambassador.jpeg",
    //     bio: "To Be Done",
    //     tags: ["Peer Resource Networks", "Program Updates Distribution", "Candidate Sourcing"],
    //     quote: "Empowering fellow students to identify and grasp opportunities early in their academic life."
    // },


    // amb2: {
    //     name: "Syed Ali Tariq",
    //     title: "Campus Ambassador",
    //     photo: "../../images/photos/campus-ambassador2.jpeg",
    //     bio: "To Be Done",
    //     tags: ["Campus Engagement Pipelines", "Brand Representation", "Onboarding Support Setup"],
    //     quote: "Helping peers build functional economic independence before their graduation date arrives."
    // }
};

function switchProfile(key) {
    const mainSection = document.getElementById("main")

    const member = teamData[key];
    if (!member) return;

    // Update DOM Elements
    document.getElementById('profilePhoto').src = member.photo;
    document.getElementById('profilePhoto').alt = member.name;
    document.getElementById('profileName').innerText = member.name;
    document.getElementById('profileTitle').innerText = member.title;
    document.getElementById('profileBio').innerText = member.bio;
    // document.getElementById('profileQuote').innerText = `"${member.quote}"`;

    // Clear and Render Tags
    const tagsContainer = document.getElementById('profileTags');
    tagsContainer.innerHTML = '';
    member.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = "bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-200/60";
        tagSpan.innerText = tag;
        tagsContainer.appendChild(tagSpan);
    });
}

// ... [Keep your existing teamData object and switchProfile function exactly as they are] ...

// Add this function right below your existing switchProfile function:
window.onload = function() {
    // 1. Look for URL query variables (e.g., ?member=ceo)
    const urlParams = new URLSearchParams(window.location.search);
    const memberKey = urlParams.get('member');

    // 2. If a valid key exists inside our dataset, load that profile immediately
    if (memberKey && teamData[memberKey]) {
        // Update the drop-down box visual selection state
        document.getElementById('memberSelector').value = memberKey;
        // Run the profile updater layout function
        switchProfile(memberKey);
    } else {
        // Fallback default: If someone just navigates directly to profile.html, show the CEO
        switchProfile('ceo');
    }
};

// MULTI-DIRECTION INTERSECTION OBSERVER
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.50 // Triggers when 12% of the element hits the screen
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select and observe all variations of our design tokens
    const animationSelectors = ".reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale";
    document.querySelectorAll(animationSelectors).forEach(el => observer.observe(el));
});
