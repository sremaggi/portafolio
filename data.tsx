import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin,Github,Server,Blocks,PanelsTopLeft,CloudCog,PhoneForwarded,SquareUser,Library } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/sremaggi",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/sebasti%C3%A1n-ignacio-remaggi-flores-5a558b294/",
    },

];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "About",
        icon: <SquareUser size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Services",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Portafolio",
        icon: <Library size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    }
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Senior Software Engineer",
        subtitle: "Falabella Tecnología Corportativa",
        description: "Currently in the employee and stock management portfolio, developing front and backend. Focused on software products for our employees.",
        date: "Mar 2023",
    },
    {
        id: 2,
        title: "Software Engineer",
        subtitle: "Falabella Retail S.A",
        description: "Focused on developments for both customers and employees of our company, in this period of time I was leading a particular product with great success.",
        date: "Jan 2022",
    },
    {
        id: 3,
        title: "Tech Lead in Development",
        subtitle: "SVirtual.cl",
        description: "I joined the consulting firm to lead a project that had as a client falabella, the stack that was occupied was kafka and golang which I could lead in a good way to finish the project.",
        date: "Aug 2021",
    },
    {
        id: 4,
        title: "Professional Internship",
        subtitle: "Falabella Financiero",
        description: "My work was mainly oriented to onprem backend development, where we were working on several projects that communicated through events using kafka.",
        date: "Dic 2019",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Server />,
        title: "Backend development",
        description: "Robust functionality, scalability and efficiency define my approach to backend development. I specialize in creating custom backend solutions that not only meet, but exceed expectations for performance, security and scalability.",
    },
    {
        icon: <Blocks />,
        title: "Frontend development",
        description: "With a deep understanding of the latest trends and technologies, I deliver custom solutions that not only visually captivate but also provide a seamless and accessible user experience. From responsive websites to progressive web apps, I am dedicated to creating interfaces that not only look amazing on any device, but also enhance user interaction and satisfaction.",
    },
    {
        icon: <PanelsTopLeft />,
        title: "Web development",
        description: "Elevate your digital presence with my comprehensive web development services, designed to turn your visions into impactful realities in the digital world. I specialize in creating complete web solutions that encompass both the visually appealing front-end and the robust, scalable back-end. My focus is on developing websites and applications that not only look extraordinary, but also function flawlessly, ensuring an exceptional user experience and seamless operability.",
    },
    {
        icon: <CloudCog />,
        title: "Cloud development",
        description: "Transform and scale your business with my specialized cloud development services, where technological innovation meets strategic business solutions. I specialize in designing, implementing and managing cloud applications that boost efficiency, scalability and security, enabling you to successfully navigate today's dynamic digital world.",
    },
    {
        icon: <PhoneForwarded />,
        title: "Consultancy",
        description: "Empower your technology strategy with my IT consulting services, designed to align technology with your business objectives and maximize your return on investment. Specialized in providing expert and customized solutions, I focus on optimizing your operations, increasing your IT security and facilitating the digital transformation of your organization.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Primera Vista Hospedaje",
        image: "/pv1.jpg",
        imageBase64:"",
        urlGithub: "https://github.com/sremaggi/primeravista2",
        urlDemo: "https://primeravista-50b01.web.app/",
    },
    {
        id: 2,
        title: "Portfolio",
        image: "/mp1.jpg",
        imageBase64:"",
        urlGithub: "https://github.com/sremaggi/portafolio",
        urlDemo: "https://sremaggi.dev",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];