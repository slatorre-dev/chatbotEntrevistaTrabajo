# Guía de entrevistas — chatbotEntrevistaTrabajo

Repositorio con material didáctico para preparar entrevistas de trabajo (preguntas frecuentes, respuestas modelo, comportamiento y preguntas difíciles) y automatización para versionado.

Contenido
- `index.html` — página principal con la guía en español.
- `styles.css` — estilos básicos.
- `version.txt` — fichero con la versión actual.
- `.github/workflows/bump-version.yml` — workflow que incrementa la versión en cada `push` a `main` y la publica con commit.
- `scripts/bump_version.sh` — script local (bash) para incrementar la versión y commitear.
- `scripts/bump_version.ps1` — script PowerShell para Windows.
- `memoria_claude.md` — resumen de fuentes e investigación.

Cómo funciona el versionado automático

El workflow se ejecuta en cada `push` a la rama `main`. Si existe `version.txt`, incrementará el número de parche (ej. 0.1.0 → 0.1.1), hará commit y push del cambio usando el token de GitHub Actions. Si prefieres control manual, utiliza los scripts en `scripts/`.

Uso local (bash):

```bash
# ejecutar desde la raíz del repositorio
bash scripts/bump_version.sh
git push origin main
```

Uso local (PowerShell):

```powershell
# ejecutar desde la raíz del repositorio
.\scripts\bump_version.ps1
git push origin main
```

Notas
- El workflow requiere permisos de escritura (`contents: write`) para poder commitear con `GITHUB_TOKEN`.
- Para evitar bucles de CI, el commit incluye `[skip ci]` en el mensaje.

¿Quieres que también publique releases automáticas en GitHub o que añada un `CHANGELOG.md`?