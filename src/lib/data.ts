import type {
  ExperienceItem,
  Project,
  SiteInfo,
  SiteSectionFlags,
  SocialLink,
  StackGroup
} from "@/src/types";

export const SECTION_FLAGS: SiteSectionFlags = {
  showAbout: true,
  showSkills: true,
  showExperience: true,
  showProjects: true
};

export const SITE_INFO: SiteInfo = {
  name: "Leonardo Gustavo Gaona Briceño",
  nickname: "Leonardo GB",
  role: "Estudiante de Ciencia de la Computación y Full Stack Developer",
  siteUrl: "https://example.com",
  email: "leogustavo.gb29@gmail.com",
  location: "Arequipa, Perú",
  birthDate: "2004-12-29",
  introKicker: "Hola, soy",
  introDisplayName: "Leonardo Gaona Briceño",
  introImage: "/images/me.jpg",
  introImageAlt: "",
  heroTitleTop: "FULL STACK",
  heroTitleBottom: "DEVELOPER",
  heroSummary:
    "Estudiante de Ciencia de la Computación (UNSA) con enfoque en backend y sistemas orientados a datos. Desarrollo APIs REST, diseño modelos relacionales y busco entregar software con arquitectura modular, pruebas básicas y documentación clara.",
  heroCodeLines: [
    "Construyo APIs y sistemas orientados a datos, con enfoque en arquitectura modular, pruebas básicas y documentación clara."
  ],
  aboutHeadline:
    "Construyo APIs y sistemas orientados a datos, con enfoque en arquitectura modular, pruebas básicas y documentación clara.",
  aboutLeftTitle: "QUIÉN SOY",
  aboutLeftItems: [
    "Estudiante de Ciencia de la Computación en la Universidad Nacional de San Agustín de Arequipa (Arequipa, Perú).",
    "Me interesa construir sistemas que conecten backend, datos y una arquitectura clara, con foco en aplicaciones reales.",
    "Enfoque: backend + data",
    "Intereses: APIs, SQL, performance (C++/MPI)",
    "Actualmente: fortaleciendo proyectos y portafolio para prácticas"
  ],
  aboutRightTitle: "CÓMO TRABAJO",
  aboutRightItems: [
    "Arquitectura modular: capas, responsabilidades y nombres claros",
    "APIs REST consistentes: validación, errores estandarizados, endpoints limpios",
    "SQL con criterio: modelado relacional, joins y agregaciones cuando aportan valor",
    "Calidad mínima real: pruebas para lo crítico + checks simples"
  ],
  footerTitle: "Contáctame",
  footerCreditLabel: "github.com/LeonardoGB29",
  footerCreditUrl: "https://github.com/LeonardoGB29"
};

export const GENERAL_INFO = {
  email: SITE_INFO.email
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "github", url: "https://github.com/LeonardoGB29" },
  { name: "email", url: "mailto:leogustavo.gb29@gmail.com" }
];

export const STACK_GROUPS: StackGroup[] = [
  {
    id: "lenguajes",
    type: "Lenguajes",
    items: [
      {
        id: "cpp",
        name: "c/c++",
        icon: "https://cdn.simpleicons.org/cplusplus"
      },
      {
        id: "python",
        name: "python",
        icon: "https://cdn.simpleicons.org/python"
      },
      {
        id: "sql",
        name: "sql",
        icon: "https://cdn.simpleicons.org/postgresql"
      },
      {
        id: "typescript",
        name: "typescript",
        icon: "https://cdn.simpleicons.org/typescript"
      }
    ]
  },
  {
    id: "backend",
    type: "Backend",
    items: [
      {
        id: "flask",
        name: "flask",
        icon: "https://cdn.simpleicons.org/flask/FFFFFF"
      },
      {
        id: "drf",
        name: "django rest framework",
        icon: "https://cdn.simpleicons.org/django"
      },
      {
        id: "sqlalchemy",
        name: "sqlalchemy",
        icon: "https://cdn.simpleicons.org/sqlalchemy"
      },
      {
        id: "jwt",
        name: "jwt",
        icon: "https://jwt.io/img/pic_logo.svg"
      }
    ]
  },
  {
    id: "frontend",
    type: "Frontend",
    items: [
      {
        id: "html",
        name: "html",
        icon: "https://cdn.simpleicons.org/html5"
      },
      {
        id: "css",
        name: "css",
        icon: "https://cdn.simpleicons.org/css"
      },
      {
        id: "react",
        name: "react",
        icon: "https://cdn.simpleicons.org/react"
      },
      {
        id: "api-consumption",
        name: "consumo de APIs",
        icon: "https://cdn.simpleicons.org/postman"
      }
    ]
  },
  {
    id: "datos-bd",
    type: "Datos/BD",
    items: [
      { id: "postgresql", name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { id: "mysql", name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { id: "sqlite", name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite" }
    ]
  },
  {
    id: "herramientas",
    type: "Herramientas",
    items: [
      {
        id: "git",
        name: "git",
        icon: "https://cdn.simpleicons.org/git"
      },
      {
        id: "github",
        name: "github",
        icon: "https://cdn.simpleicons.org/github/FFFFFF"
      },
      {
        id: "docker",
        name: "docker",
        icon: "https://cdn.simpleicons.org/docker"
      },
      {
        id: "postman",
        name: "postman",
        icon: "https://cdn.simpleicons.org/postman"
      },
      {
        id: "linux",
        name: "linux",
        icon: "https://cdn.simpleicons.org/linux"
      },
      {
        id: "vscode",
        name: "vs code",
        icon: "https://api.iconify.design/logos:visual-studio-code.svg"
      }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "edu-unsa",
    company: "Universidad Nacional de San Agustín de Arequipa (UNSA)",
    title: "Ciencia de la Computación",
    startDate: "2022",
    endDate: "Actualidad"
  },
  {
    id: "jaiio-2025",
    company: "JAIIO 2025 - UBA (Buenos Aires, Argentina)",
    title: "Asistente en charlas, talleres y networking académico",
    startDate: "2025",
    endDate: "2025"
  },
  {
    id: "ielts-2025",
    company: "IELTS Academic",
    title: "IELTS Academic 5.0 - Inglés intermedio",
    startDate: "2025",
    endDate: "2025"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    slug: "sistema-academico-epcc",
    name: "Sistema Académico EPCC",
    year: 2025,
    techStack: [
      "Python",
      "React",
      "TypeScript",
      "Django REST Framework",
      "PostgreSQL",
      "Docker Compose"
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
    galleryImages: [
      "/images/projects/epcc/epcc1.png",
      "/images/projects/epcc/epcc2.png",
      "/images/projects/epcc/epcc3.png"
    ],
    sourceCode: "https://github.com/LeonardoGB29/Sistema_Academico_EPCC",
    description:
      "Sistema web para gestión académica con frontend en React/TypeScript y backend en Django REST. Arquitectura por módulos, BD relacional y ejecución con Docker Compose.",
    features: [
      "Arquitectura por módulos (apps)",
      "Base de datos relacional para gestión académica",
      "Despliegue local con Docker Compose"
    ]
  },
  {
    id: "project-2",
    slug: "actas-vitales-reniec-api",
    name: "Actas Vitales / RENIEC API",
    year: 2025,
    techStack: ["Flask", "SQLAlchemy", "JWT", "Postman"],
    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&auto=format&fit=crop",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1400&q=80&auto=format&fit=crop",
    sourceCode: "https://github.com/LeonardoGB29/reniec_process",
    description:
      "API modular con migraciones, autenticación y colección Postman para pruebas. Enfoque en estructura mantenible y endpoints claros.",
    features: [
      "API REST modular",
      "Migraciones y modelo de datos con SQLAlchemy",
      "Pruebas manuales documentadas con Postman"
    ]
  },
  {
    id: "project-3",
    slug: "hpc-allgather-mpi-cpp",
    name: "HPC - Allgather (MPI/C++)",
    year: 2025,
    techStack: ["C++", "MPI", "Microbenchmarks"],
    thumbnail: 
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
    galleryImages: [
      "/images/projects/hpc/run_1.png",
      "/images/projects/hpc/run_2.png",
      "/images/projects/hpc/tiempos_log.jpeg"
    ],
    sourceCode:
      "https://github.com/LeonardoGB29/A-Locality-Aware-Bruck-Allgather",
    description:
      "Implementación de Bruck Allgather y variante locality-aware; comparación contra MPI_Allgather con microbenchmarks y warmup.",
    features: [
      "Bruck Allgather implementado en C++",
      "Variante locality-aware para evaluar performance",
      "Comparativas contra MPI_Allgather"
    ]
  },
  {
    id: "project-4",
    slug: "simulador-almacenamiento-disco-cpp",
    name: "Simulador de almacenamiento en disco",
    year: 2024,
    techStack: ["C++", "Storage", "Slotted Page"],
    thumbnail:
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=900&q=80&auto=format&fit=crop",
    image:
      "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=1400&q=80&auto=format&fit=crop",
    sourceCode: "https://github.com/LeonardoGB29/Megatron3000",
    description:
      "Simulación de almacenamiento por páginas (slotted page): inserción, búsqueda y manejo de offsets/fragmentación.",
    features: [
      "Inserción y búsqueda sobre páginas",
      "Gestión de offsets y fragmentación",
      "Modelo tipo slotted page"
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
