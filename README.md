# Nerdearla 🇦🇷 Spain 🇪🇸 2025: MCP Servers: los super poderes ✨ de los LLMs 🤖

<div align="center">

[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UC140iBrEZbOtvxWsJ-Tb0lQ?style=for-the-badge&logo=youtube&logoColor=white&color=red)](https://www.youtube.com/c/GiselaTorres?sub_confirmation=1)
[![GitHub followers](https://img.shields.io/github/followers/0GiS0?style=for-the-badge&logo=github&logoColor=white)](https://github.com/0GiS0)
[![LinkedIn Follow](https://img.shields.io/badge/LinkedIn-Sígueme-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giselatorresbuitrago/)
[![X Follow](https://img.shields.io/badge/X-Sígueme-black?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/0GiS0)

</div>

¡Che, developer 👋🏻! Este repositorio contiene las demos que mostré en Nerdearla 2025 durante la charla MCP Servers: los super poderes ✨ de los LLMs 🤖. Con él podrás aprender las características principales de un servidor de este tipo.

---

<div align="center">

![MCP Servers: los super poderes ✨ de los LLMs 🤖](./images/Portada%20nerdearla.png)

</div>

---

## 🎬 Las Demostraciones

Tres demos progresivas que demuestran desde lo básico hasta lo avanzado:

---

### 🟢 1️⃣ **Search Video** — _Herramienta Básica_

> 🎯 La puerta de entrada: aprende lo fundamental de los MCP Servers

Busca videos en YouTube basándote en una consulta simple. Esta es la demo perfecta para entender cómo todo funciona bajo el capó.

| Concepto | Descripción |
|----------|-------------|
| 📁 **Ubicación** | `src/tools/basic/index.ts` |
| 🎓 **Complejidad** | ⭐ Muy sencilla |
| 🔧 **Tecnologías** | YouTube API, Zod, Logger |

**Lo que aprenderás:**
- ✅ Definir una herramienta con esquema de validación
- ✅ Llamar a servicios externos (YouTube API)
- ✅ Manejo robusto de errores
- ✅ Estructura correcta de respuestas MCP

---

### 🟡 2️⃣ **Search Channel** — _Herramienta Interactiva (Elicitations)_

> 💬 Un paso adelante: interacción en tiempo real con el usuario

Una herramienta que busca canales en YouTube y **dialoga con el usuario** mediante elicitations. Pregunta si deseas recuperar los últimos vídeos del canal.

| Concepto | Descripción |
|----------|-------------|
| 📁 **Ubicación** | `src/tools/elicitations/index.ts` |
| 🎓 **Complejidad** | ⭐⭐ Media |
| 🔧 **Tecnologías** | Elicitations, RequestHandlerExtra, Diálogos |

**Lo que aprenderás:**
- ✅ Crear herramientas interactivas bidireccionales
- ✅ Usar elicitations para formularios y diálogos
- ✅ Validación de esquemas más complejos
- ✅ Comunicación cliente-servidor avanzada

---

### 🔴 3️⃣ **Generate Video Title** — _Herramienta Creativa (Sampling)_

> 🚀 La bestia: delega en modelos de IA para máxima potencia

Genera títulos **creativos y únicos** para videos usando **sampling**. El servidor elicita el idioma preferido del usuario y luego el modelo del cliente genera múltiples sugerencias basadas en tu stack de tecnologías.

| Concepto | Descripción |
|----------|-------------|
| 📁 **Ubicación** | `src/tools/sampling/index.ts` |
| 🎓 **Complejidad** | ⭐⭐⭐ Avanzada |
| 🔧 **Tecnologías** | Sampling, CreateMessageResult, Multilingüe |

**Lo que aprenderás:**
- ✅ Delegar generación de contenido al modelo del cliente
- ✅ Elicitations con selectores (enums) bonitos
- ✅ Generar múltiples variantes creativas
- ✅ Construir herramientas verdaderamente inteligentes

---

---

## 📺 Prompts Disponibles

### 🔎 **find_repository_videos** — _Buscar Videos del Repo_

> ¡Che! 🇦🇷 Encontrá contenido en YouTube relacionado con este repositorio

Este prompt te ayuda a descubrir videos sobre MCP Servers, Model Context Protocol y Nerdearla Spain 2025. Usa automáticamente la herramienta `search_video` para buscar contenido relevante, priorizando el canal de returngis (Gisela Torres).

| Concepto | Descripción |
|----------|-------------|
| 📁 **Ubicación** | `src/prompts/index.ts` |
| 🎯 **Funcionalidad** | Busca videos relacionados con el repo |
| 🔧 **Incluye** | Título, canal, URL y descripción |

**Cómo usarlo:**
- Simplemente invocá el prompt `find_repository_videos`
- El asistente buscará automáticamente videos sobre MCP Servers
- Los resultados priorizarán el canal returngis
- Obtendrás una lista bien organizada con toda la info

---

## 💝 ¿Te gustó la charla?

Si disfrutaste con las demos y quieres más contenido sobre MCP Servers, desarrollo y tecnología con salero:

<div align="center">

🎥 **[Suscríbete a mi canal](https://www.youtube.com/c/GiselaTorres?sub_confirmation=1)** para nuevas demos y tutoriales

📧 **Sígueme en redes** para estar al día:
[YouTube](https://www.youtube.com/c/GiselaTorres) · [GitHub](https://github.com/0GiS0) · [LinkedIn](https://www.linkedin.com/in/giselatorresbuitrago/) · [X](https://twitter.com/0GiS0)

---

**Gisela Torres** · Nerdearla Spain 2025 · ¡Nos vemos en la próxima! 🚀

</div>
