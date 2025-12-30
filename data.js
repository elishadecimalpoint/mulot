// Content data (edit freely)
window.SITE_DATA = {
  notices: [
    { title: "Term Opening Dates", date: "2026-01-06", link: "admissions.html#calendar" },
    { title: "Library Orientation for Form 1", date: "2026-01-10", link: "library.html#orientation" },
    { title: "STEM Innovation Challenge", date: "2026-02-14", link: "academics.html#stem" }
  ],
  quickLinks: [
    { title: "Admissions", desc: "Join Mulot Girls", icon: "🎓", link: "admissions.html" },
    { title: "Academics", desc: "Pathways & curriculum", icon: "📚", link: "academics.html" },
    { title: "Library", desc: "E‑resources & services", icon: "🏛️", link: "library.html" },
    { title: "Departments", desc: "Subjects & teams", icon: "🏫", link: "departments.html" },
    { title: "Staff Portfolio", desc: "Profiles & contacts", icon: "👩🏽‍🏫", link: "staff.html" },
    { title: "Downloads", desc: "Policies & forms", icon: "⬇️", link: "admissions.html#downloads" }
  ],
  news: [
    {
      id: "news-innovation-lab",
      title: "New STEM Innovation Lab launched",
      date: "2025-11-18",
      excerpt: "The school unveiled a student-led innovation lab to support design thinking, robotics, and coding clubs.",
      category: "STEM",
      body: [
        "Mulot Girls School has launched a STEM Innovation Lab to expand hands-on learning in robotics, coding, electronics, and project-based science.",
        "The lab supports senior school pathway learning, interdisciplinary projects, and competition preparation.",
        "Parents and partners are invited to support equipment, mentorship, and internship opportunities."
      ]
    },
    {
      id: "news-library-upgrade",
      title: "Library upgraded with new e‑resources corner",
      date: "2025-10-03",
      excerpt: "A new e‑resources corner improves access to reference materials, past papers, and digital literacy sessions.",
      category: "Library",
      body: [
        "The library has added new computer workstations and a dedicated e‑resources space for guided research.",
        "Weekly information literacy sessions are available for all learners.",
        "Borrowing hours and guidelines have been updated on the Library page."
      ]
    },
    {
      id: "news-career-talk",
      title: "Career talk week: pathways and future careers",
      date: "2025-09-21",
      excerpt: "Students explored STEM and Social Science pathway choices through alumni panels and career mentors.",
      category: "Guidance",
      body: [
        "Learners participated in pathway clinics focusing on subject combinations, career mapping, and academic planning.",
        "Alumni shared experiences across engineering, health sciences, law, public service, and entrepreneurship."
      ]
    }
  ],
  events: [
    { title: "Form 1 Orientation", date: "2026-01-10", location: "School Hall", link: "admissions.html#orientation" },
    { title: "Parents Meeting (Term 1)", date: "2026-02-01", location: "Main Hall", link: "contact.html#parents" },
    { title: "Inter‑School Debate", date: "2026-02-22", location: "County Grounds", link: "departments.html#humanities" }
  ],
  departments: [
    {
      id: "stem",
      name: "STEM Department",
      lead: "HOD STEM",
      summary: "Science, Technology, Engineering and Mathematics pathway learning with strong practical and research components.",
      areas: ["Mathematics", "Biology", "Chemistry", "Physics", "ICT/Computing", "Agriculture"],
      highlights: ["Lab safety & practicals", "Innovation projects", "Robotics & coding club"],
      email: "mulotgirlshighschool@gmail.com"
    },
    {
      id: "social",
      name: "Social Science Department",
      lead: "HOD Social Science",
      summary: "Humanities and social sciences pathway learning that develops critical thinking, communication, and civic responsibility.",
      areas: ["History & Government", "Geography", "Business Studies", "Christian Religious Education", "Languages"],
      highlights: ["Debate & public speaking", "Community service", "Field-based learning"],
      email: "mulotgirlshighschool@gmail.com"
    },
    {
      id: "languages",
      name: "Languages Department",
      lead: "HOD Languages",
      summary: "Strengthening literacy, communication and creative expression across English, Kiswahili and other languages.",
      areas: ["English", "Kiswahili", "Literature", "Creative Writing"],
      highlights: ["Reading culture", "Drama & poetry", "Writing clinics"],
      email: "mulotgirlshighschool@gmail.com"
    }
  ],
  staff: [
    {
      id: "principal",
      name: "Principal Sally C. Towett",
      role: "Principal",
      dept: "Administration",
      pathway: "Both",
      email: "mulotgirlshighschool@gmail.com",
      phone: "0720 504 029",
      bio: "Mrs. Example provides strategic leadership, academic excellence oversight, and student welfare support. She champions integrity, innovation, and inclusive excellence.",
      education: ["M.Ed. Educational Leadership", "B.Ed. Science"],
      interests: ["School governance", "Mentorship", "Quality assurance"],
      publications: ["School Improvement Plan (SIP) 2025–2027 (internal)"],
      officeHours: "Mon–Fri, 8:00–16:30"
    },
    {
      id: "hod-stem",
      name: "Mr. David K. Example",
      role: "Head of Department — STEM",
      dept: "STEM Department",
      pathway: "STEM",
      email: "mulotgirlshighschool@gmail.com",
      phone: window.SITE_CONFIG?.phone2,
      bio: "Leads STEM curriculum delivery, labs, competitions, and innovation projects. Focused on inquiry-based learning and practical skills.",
      education: ["B.Sc. Mathematics & Computing", "PGDE"],
      interests: ["Data literacy", "STEM pedagogy", "Science fairs"],
      publications: ["STEM Project-Based Learning Guide (internal)"],
      officeHours: "Tue & Thu, 14:00–16:00"
    },
    {
      id: "hod-social",
      name: "Ms. Faith N. Example",
      role: "Head of Department — Social Science",
      dept: "Social Science Department",
      pathway: "Social Science",
      email: "mulotgirlshighschool@gmail.com",
      phone: window.SITE_CONFIG?.phone2,
      bio: "Coordinates Social Science pathway teaching, debate, and civic engagement programmes.",
      education: ["B.A. History", "PGDE"],
      interests: ["Civic education", "Debate coaching", "Student leadership"],
      publications: ["Debate Training Handbook (internal)"],
      officeHours: "Mon & Wed, 15:00–16:30"
    },
    {
      id: "librarian",
      name: "Mr. Peter M. Example",
      role: "Librarian",
      dept: "Library",
      pathway: "Both",
      email: "mulotgirlshighschool@gmail.com",
      phone: window.SITE_CONFIG?.phone1,
      bio: "Supports learners and staff with information services, reading programmes, and digital literacy sessions.",
      education: ["Dip. Library & Information Science"],
      interests: ["Information literacy", "Reading culture", "E-resources"],
      publications: ["Library User Guide (internal)"],
      officeHours: "Mon–Fri, 8:30–16:00"
    }
  ]
};
