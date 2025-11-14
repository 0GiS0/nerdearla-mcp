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

## 📺 Videos relacionados en YouTube

¡Dale, mirá estos videos que te van a ayudar un montón! 🎥✨ Acá te dejo recursos visuales que complementan todo lo que vimos en este repo. La mayoría son del canal **return(GiS);** de Gisela Torres, pero también hay otros cracks que explican MCP re bien:

### 🔥 Videos del canal return(GiS);

**Título:** Cómo crear MCP Servers y usarlos con GitHub Copilot Chat 🚀💻🤖  
**Canal:** return(GiS);  
**URL:** https://www.youtube.com/watch?v=khz4nWR9l20  
**Descripción:** Te muestro algo diferente: no solo te enseño a usar MCP Servers, sino también cómo crearlos desde cero y conectarlos con GitHub Copilot Chat.

---

**Título:** Sampling 🫴🏻🧠 Cómo tu MCP Server puede pedir prestado un modelo de IA al cliente  
**Canal:** return(GiS);  
**URL:** https://www.youtube.com/watch?v=7LARYKzChMQ  
**Descripción:** ¿Sabías que tu MCP Server puede pedir prestado un modelo de IA? Acá te explico qué es el sampling y cómo usarlo en tus proyectos.

---

**Título:** 🎯 ¡Visual Studio Code + GitHub Copilot hacen PLENO con MCP! 🎳  
**Canal:** return(GiS);  
**URL:** https://www.youtube.com/watch?v=EcufOY3Z0mU  
**Descripción:** Desde el 12 de junio, Visual Studio Code y GitHub Copilot ya soportan toda la especificación de Model Context Protocol. Te cuento todo al respecto.

---

**Título:** Elicitations en MCP 🤖: cuando el modelo te pide datos (¡no al revés!) 🧠  
**Canal:** return(GiS);  
**URL:** https://www.youtube.com/watch?v=EDHa6oq-J8Q  
**Descripción:** Te explico qué son las Elicitations en Model Context Protocol y cómo podés usarlas ya en tus proyectos.

---

**Título:** Crea tu servidor MCP con Azure Functions ⚡️🧰  
**Canal:** return(GiS);  
**URL:** https://www.youtube.com/watch?v=us9QNkEu670  
**Descripción:** Te cuento cómo crear servidores MCP con Azure Functions y te muestro cómo tengo montada la infraestructura.

---

### 🌟 Otros videos recomendados

**Título:** Gisela Torres - No Volverás a Programar Igual: Desata a GitHub Copilot con el Modo Agente y MCP Servers  
**Canal:** Codemotion  
**URL:** https://www.youtube.com/watch?v=ecwBTkUE0VI  
**Descripción:** Charla completa de Gisela en Codemotion 2025 sobre GitHub Copilot y MCP Servers. ¡No te la pierdas!

---

**Título:** Programando tus MCPs - Gisela Torres | #MIDUCONF2025  
**Canal:** midulive  
**URL:** https://www.youtube.com/watch?v=NldH5eojZPc  
**Descripción:** Gisela participa en MIDUCONF2025 compartiendo cómo programar tus propios MCP Servers.

---

**Título:** Model Context Protocol (MCP) Explained in 20 Minutes  
**Canal:** Shaw Talebi  
**URL:** https://www.youtube.com/watch?v=N3vHJcHBS-w  
**Descripción:** Una explicación clara y concisa del protocolo MCP en solo 20 minutos. Ideal para arrancar.

---

**Título:** you need to learn MCP RIGHT NOW!! (Model Context Protocol)  
**Canal:** NetworkChuck  
**URL:** https://www.youtube.com/watch?v=GuTcle5edjk  
**Descripción:** NetworkChuck te explica por qué necesitás aprender MCP ahora mismo. Muy didáctico y entretenido.

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
