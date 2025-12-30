# Diseño semántico de documentos académicos

[![deploy](https://github.com/glacy/frontmatter-academico/actions/workflows/deploy.yml/badge.svg)](https://github.com/glacy/frontmatter-academico/actions/workflows/deploy.yml)


**Curso introductorio sobre frontmatter, metadatos y publicación reproducible.**

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/glacy/frontmatter-academico)

🚀 **Sitio web oficial (Versión compilada):** [https://glacy.github.io/frontmatter-academico](https://glacy.github.io/frontmatter-academico)

---

## Sobre este repositorio

Este repositorio contiene el **código fuente** del curso. A diferencia del sitio web (pensado para estudiantes), este `README` está dirigido a quienes deseen **auditar, replicar o contribuir** al proyecto.

El curso está construido con **MyST Markdown** y demuestra principios de:
- **Estructura semántica:** Uso intensivo de frontmatter YAML.
- **Reproducibilidad:** Entorno controlado y despliegue automatizado.
- **Documentación como código:** CI/CD con GitHub Actions.

## Ejecución en la nube (Recomendado)

La forma más sencilla de ejecutar este curso es utilizando **GitHub Codespaces**.
1. Haga clic en el botón "Open in GitHub Codespaces" de arriba.
2. Espere a que el entorno se construya (instalará automáticamente todas las dependencias).
3. Una vez lista la terminal, el entorno `frontmatter-academico` estará activo.

### Buenas prácticas (Pre-commit)

Si clonas el repositorio localmente, se recomienda instalar los hooks de git para validación automática:

```bash
# Una vez activado el entorno conda
pre-commit install
```
Esto validará el frontmatter automáticamente al intentar hacer un commit.

## Estructura del proyecto

```text
frontmatter-academico/
├── myst.yml               # ⚙️ Configuración del sitio y metadatos globales
├── index.md               # 🏠 Portada del curso (Home)
├── sessions/              # 📚 Contenido del curso (Capítulos)
├── examples/              # 🧩 Ejemplos de referencia
├── exercises/             # ✍️ Actividades prácticas
└── .github/               # 🤖 Flujos de automatización (CI/CD)
```

## Desarrollo local

Si deseas ejecutar este curso en tu computadora:

1.  **Requisitos:** Tener instalado Node.js o Python.

2.  **Instalación:**
    ```bash
    # Vía Python
    pip install mystmd

    # O vía NPM
    npm install -g mystmd
    ```

3.  **Ejecución:**
    ```bash
    myst start
    ```
    El sitio estará disponible en `http://localhost:3000`.

## Reproducibilidad y configuración local

Para garantizar un entorno de desarrollo consistente, este proyecto utiliza Anaconda/Miniconda.

### 1. Configuración del entorno
```bash
# Crear el entorno desde el archivo de configuración
conda env create -f environment.yml

# Activar el entorno
conda activate frontmatter-academico
```

### 2. Verificación y validación
Se incluyen scripts para verificar la integridad del entorno y el contenido:

- **Verificar entorno técnico:**
  ```bash
  # Linux / macOS / WSL
  ./verify_env.sh

  # Windows (PowerShell)
  .\verify_env.ps1
  ```
  Comprueba que todas las herramientas necesarias (MyST, Pandoc, Python, etc.) estén instaladas y accesibles.

- **Validar frontmatter:**
  ```bash
  # Linux / macOS / WSL
  ./validate_frontmatter.sh

  # Windows
  python validate_frontmatter.sh
  ```
  Analiza todos los archivos en `sessions/` para asegurar que cumplen con la estructura de metadatos requerida (título, objetivos, keywords, etc.).

- **Generar tabla de sesiones:**
  ```bash
  # Linux / macOS / WSL
  python3 generate_sessions_table.sh
  ```
  Escanea los archivos en `sessions/` y regenera automáticamente `sessions_table.md` con los títulos y objetivos de aprendizaje. **Nota:** Este paso se ejecuta automáticamente al desplegar el sitio vía GitHub Actions.


## Licencia

Este material es abierto.
- **Contenido:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Código:** MIT
