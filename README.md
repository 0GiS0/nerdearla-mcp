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

## 📺 Videos Relacionados

¿Querés profundizar más sobre MCP Servers? Acá te dejo una selección de videos que te van a servir un montón para aprender más sobre este tema:

### 🎥 Videos del Canal return(GiS);

**[Cómo crear MCP Servers y usarlos con GitHub Copilot Chat 🚀💻🤖](https://www.youtube.com/watch?v=khz4nWR9l20)**  
_Canal: return(GiS);_  
No solo te enseñaré a usar MCP Servers, ¡también aprenderás a crearlos y usarlos con GitHub Copilot Chat!

**[Sampling 🫴🏻🧠 Cómo tu MCP Server puede pedir prestado un modelo de IA al cliente](https://www.youtube.com/watch?v=7LARYKzChMQ)**  
_Canal: return(GiS);_  
¿Sabías que tu MCP Server puede pedir prestado un modelo de IA? Acá te explico qué es el sampling y cómo usarlo.

**[🎯 ¡Visual Studio Code + GitHub Copilot hacen PLENO con MCP! 🎳](https://www.youtube.com/watch?v=EcufOY3Z0mU)**  
_Canal: return(GiS);_  
Desde el 12 de junio, Visual Studio Code y GitHub Copilot ya soportan toda la especificación de Model Context Protocol.

**[Crea tu servidor MCP con Azure Functions ⚡️🧰](https://www.youtube.com/watch?v=us9QNkEu670)**  
_Canal: return(GiS);_  
Aprende cómo crear servidores MCP con Azure Functions de manera fácil y rápida.

**[Elicitations en MCP 🤖: cuando el modelo te pide datos (¡no al revés!) 🧠](https://www.youtube.com/watch?v=EDHa6oq-J8Q)**  
_Canal: return(GiS);_  
Descubre qué son las Elicitations en Model Context Protocol y cómo usarlas en tus proyectos.

**[¡Controla tu casa desde VS Code! 🧠💡 Configura el MCP Server de Home Assistant paso a paso 🛠️🏠](https://www.youtube.com/watch?v=6J4KD5NJtdc)**  
_Canal: return(GiS);_  
¿Te imaginás controlar tu casa desde Visual Studio Code? En este video lo hacemos realidad con MCP.

### 🌟 Charlas y Presentaciones

**[Programando tus MCPs - Gisela Torres | #MIDUCONF2025](https://www.youtube.com/watch?v=NldH5eojZPc)**  
_Canal: midulive_  
Charla completa sobre programación de MCP Servers en la Miduconf 2025.

**[No Volverás a Programar Igual - GitHub Copilot con Modo Agente y MCP Servers](https://www.youtube.com/watch?v=ecwBTkUE0VI)**  
_Canal: Codemotion_  
Charla de Gisela Torres en Codemotion 2025 sobre GitHub Copilot, modo agente y MCP Servers.

### 🎓 Tutoriales y Recursos Educativos

**[Intro to MCP Servers – Model Context Protocol with Python Course](https://www.youtube.com/watch?v=DosHnyq78xY)**  
_Canal: freeCodeCamp.org_  
Curso completo para aprender a construir MCP Servers con Python usando la biblioteca FastMCP.

**[Model Context Protocol (MCP) Explained in 20 Minutes](https://www.youtube.com/watch?v=N3vHJcHBS-w)**  
_Canal: Shaw Talebi_  
Explicación clara y concisa de MCP en solo 20 minutos, ideal para arrancar.

**[Model Context Protocol Clearly Explained | MCP Beyond the Hype](https://www.youtube.com/watch?v=tzrwxLNHtRY)**  
_Canal: codebasics_  
Una explicación súper simple de MCP que va más allá del hype y te muestra lo esencial.

**[3 Amazing MCP Servers Every Developer Needs in 2025](https://www.youtube.com/watch?v=qzQ6kA3LDhs)**  
_Canal: AWS Developers_  
Descubre MCP Servers poderosos como Brave Search, AWS Docs y más que todo developer necesita.

**[you need to learn MCP RIGHT NOW!! (Model Context Protocol)](https://www.youtube.com/watch?v=GuTcle5edjk)**  
_Canal: NetworkChuck_  
Tutorial energético sobre por qué necesitás aprender MCP ahora mismo, con ejemplos de Docker MCP.

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
