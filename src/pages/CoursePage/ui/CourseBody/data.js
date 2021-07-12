const Courses = [
    {
        id: 1,
        title: "Introduction to Django Rest Framework",
        description:
        "This course will give you a basic introduction to the Django web framework which can be used to build powerful and secure websites in quick time",
        cover_img:
        "https://1.bp.blogspot.com/-42WDaVJa3j8/Xw73Ww75gCI/AAAAAAAAhHg/ePGNcnUyddEOg8NSXoAEe0Upiu3rUwkdACLcBGAsYHQ/s400/Django%2B3%2B-%2BFull%2BStack%2BWebsites%2Bwith%2BPython%2BWeb%2BDevelopment%2B-%2Bbest%2BUdemy%2Bcourse.png",
        type: "Free",
    },
    {
        id: 2,
        title: "Getting Started with React and React Router",
        description:
        "This course will give you a basic introduction to React and React Router framework which can be used to build powerful and secure interfaces in quick time",
        cover_img: "https://i.morioh.com/c773f40fee.png",
        type: "Premium",
    },
    {
        id: 3,
        title: "Exploratory Data Analysis with Python",
        description:
        "This course will give you a basic introduction to use Python for advanced data analysis operations in real world situations.",
        cover_img: "https://miro.medium.com/max/2560/1*Ptv1_9wX9O2Rm2IBklyufw.png",
        type: "Premium",
    },
    {
        id: 4,
        title: "6 Python Projects You Can Finish in a Weekend",
        description:
        "Beginner and advanced projects that will help you level up your Python code.",
        cover_img: "https://miro.medium.com/max/700/0*RpniYppP_ieO1kvA",
        type: "Premium",
    },
    {
        id: 5,
        title: "How To Code Faster in Visual Studio Code",
        description:
        "Use Visual Studio Code tools to improve productivity.",
        cover_img: "https://miro.medium.com/max/700/0*RpniYppP_ieO1kvA",
        type: "Premium",
    },
    {
        id: 6,
        title: "Free Course to Learn English Language",
        description:
        "English Language is One of the Most Spoken Language in the World.",
        cover_img: "https://assets.entrepreneur.com/content/3x2/2000/1602623254-aprender-ingles1.jpg",
        type: "Free",
    },
    {
        id: 7,
        title: "Learning Communication Skill",
        description:
        "Communcation is very important when communcating with other people",
        cover_img: "https://th.bing.com/th/id/R657aaecf453be5fca9b9bba6eb9af510?rik=ns8HdGCJQ3ulIQ&riu=http%3a%2f%2fwww.glyndwr.ac.uk%2fen%2fShortCourses%2fImage-66591-en.jpg&ehk=I1qFjpHSrwtw8Y6vi4oQ9ATaERhbPiQJIvNp%2b%2bbUk6Q%3d&risl=&pid=ImgRaw",
        type: "Free",
    },
    {
        id: 8,
        title: "6 Python Projects You Can Finish in a Weekend",
        description:
        "Beginner and advanced projects that will help you level up your Python code.",
        cover_img: "https://miro.medium.com/max/700/0*RpniYppP_ieO1kvA",
        type: "Premium",
    },
    {
        id: 9,
        title: "6 Python Projects You Can Finish in a Weekend",
        description:
        "Beginner and advanced projects that will help you level up your Python code.",
        cover_img: "https://miro.medium.com/max/700/0*RpniYppP_ieO1kvA",
        type: "Premium",
    },
    {
        id: 10,
        title: "6 Python Projects You Can Finish in a Weekend",
        description:
        "Beginner and advanced projects that will help you level up your Python code.",
        cover_img: "https://miro.medium.com/max/700/0*RpniYppP_ieO1kvA",
        type: "Premium",
    },

];

const CourseCategories = [
    {title: "Web Development", total: 208},
    {title: "Designs", total: 193},
    {title: "Photography", total: 230},
    {title: "Software Engineer", total: 100},
    {title: "UI/UX RoadMap", total: 34},
    {title: "Digital Marketing", total: 382},
]

const courseTypes = [{'type':'Paid', 'name': 'Premium'}, {'type':'Free', 'name':'free'}]

const priceRange = {
    lowest: 1, highest: 10000
}

export { Courses, CourseCategories, courseTypes, priceRange }
