# Portfolio Personal - Gabriel Soto Méndez

Portafolio personal desarrollado con Astro y TailwindCSS. Diseño minimalista, completamente responsivo y optimizado para rendimiento.

## Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web estático de alto rendimiento
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS para estilos
- **[Shiki](https://github.com/shikijs/shiki)** - Resaltado de sintaxis de código

## Instalación y Configuración

### Requisitos Previos
- Node.js v18 o superior
- npm o pnpm

### Instrucciones

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd astro-developer-portfolio-template

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
# El sitio estará disponible en http://localhost:4321

# 4. Compilar para producción
npm run build
# Los archivos compilados estarán en ./dist
```

## Personalización

### Información Personal
Edita estos archivos para actualizar tu información:
- `src/components/Profile.astro` - Nombre, título, ubicación y descripción
- `src/components/Socials.astro` - Enlaces a redes sociales
- `src/components/ContentProjects.astro` - Proyectos destacados con roles
- `src/components/ContentSkills.astro` - Habilidades técnicas y blandas
- `src/components/ContentAbout.astro` - Sección "Sobre mí"

### Imágenes
- `src/assets/profile.png` - Foto de perfil principal
- `src/assets/yo.jpg` - Foto alternativa (efecto flip)
- `public/img/logo.svg` - Logo del sitio
- `public/img/meta.png` - Imagen Open Graph para compartir en redes

### Configuración del Sitio
- `astro.config.mjs` - URL del sitio y configuración general
- `tailwind.config.js` - Color principal del tema
- `src/layouts/Layout.astro` - Metadatos SEO y configuración general

## Estructura del Proyecto

```
├── src/
│   ├── assets/          # Imágenes y recursos
│   ├── components/      # Componentes de la UI
│   ├── layouts/         # Plantillas de página
│   ├── pages/          # Páginas del sitio
│   └── styles/         # Estilos globales
├── public/             # Archivos estáticos
└── astro.config.mjs    # Configuración de Astro
```

## Características

- ✅ 100% estático - Sin JavaScript en el cliente
- ✅ Totalmente responsivo
- ✅ Optimizado para SEO
- ✅ Efecto flip animado en foto de perfil
- ✅ Resaltado de sintaxis para código
- ✅ Puntuación perfecta en PageSpeed

## Despliegue

El contenido de la carpeta `./dist` puede desplegarse en cualquier servicio de hosting estático:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

---

Desarrollado por Gabriel Soto Méndez
