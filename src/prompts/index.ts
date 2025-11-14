import { z } from "zod";
import { completable } from '@modelcontextprotocol/sdk/server/completable.js';

// 🎬 Tipos para búsqueda de videos en YouTube (alineado con YouTube API v3)
interface YouTubeSearchParams {
    query: string;
    language?: string;
    sortBy?: string;
    maxResults?: string;
}

// 🎯 Tipo para búsqueda de videos del repositorio
interface RepositoryVideosParams {
    includeChannel?: string;
}


// 🎬 Prompt para buscar videos en YouTube con parámetros avanzados
const searchYoutubeVideosPrompt = {
    // 📌 Nombre único del prompt
    name: "search_youtube_videos",

    // 📋 Configuración con descripción y esquema de argumentos
    config: {
        title: 'Buscar vídeos en YouTube',
        description: "🔍 Prompt avanzado para buscar videos en YouTube con filtros por idioma, duración, calidad, nivel de aprendizaje y ordenamiento.",
        // ✅ Schema de argumentos validados con Zod y con sugerencias automáticas
        argsSchema: {
            query: completable(z.string().min(1), value => {
                // Query suggestions
                return ['MCP Servers', 'IA Generativa', 'Chatbots', 'Nerdearla Spain 2025', 'TypeScript tutorial'].filter(q => q.toLowerCase().startsWith(value.toLowerCase()));
            }),
            language: completable(z.string(), value => {
                // Language suggestions
                return ['español', 'inglés', 'francés', 'alemán', 'chino'].filter(l => l.toLowerCase().startsWith(value.toLowerCase()));
            }),
            sortBy: completable(z.string(), value => {
                // Sort order suggestions
                const options = ['relevancia', 'fecha', 'valoración', 'número de vistas', 'título'];
                if (!value) return options;
                return options.filter(s => s.startsWith(value.toLowerCase()));
            }),
            maxResults: completable(z.string(), value => {
                // Result count suggestions
                const options = ['5', '10', '15', '20', '25', '50'];
                if (!value) return options;
                return options.filter(n => n.startsWith(value));
            })
        }
    },

    // 🛠️ Handler que procesa los argumentos y retorna los mensajes del prompt
    handler: (params: YouTubeSearchParams) => {
        const {
            query,
            language,
            sortBy = 'relevance',
            maxResults = '10'
        } = params;


        // 📝 Construir mensaje descriptivo detallado
        let details = `Quiero buscar contenido en YouTube sobre "${query}"`;
        if (language) details += ` en idioma ${language}`;
        if (sortBy !== 'relevance') details += `\nOrdenados por: ${sortBy === 'date' ? 'fecha más reciente' : sortBy === 'rating' ? 'mejor valoración' : sortBy === 'viewCount' ? 'más vistas' : 'título'}`;
        details += `\nMostrar hasta ${parseInt(maxResults) || 10} resultados.`;

        return {
            // 📤 Retornar el array de mensajes para el LLM
            messages: [
                {
                    role: "assistant" as const,
                    content: {
                        type: "text" as const,
                        text: details
                    }
                }
            ]
        };
    }
};

// 🎯 Prompt para encontrar videos relacionados con el repositorio
const findRepositoryVideosPrompt = {
    // 📌 Nombre único del prompt
    name: "find_repository_videos",

    // 📋 Configuración del prompt
    config: {
        title: '🔎💻 Buscar videos sobre el repositorio',
        description: "¡Che! 🇦🇷 Busca videos en YouTube que estén relacionados con el contenido de este repo (MCP Servers, Nerdearla Spain 2025). Priorizamos el canal de returngis pero también buscamos en otros canales.",
        // ✅ Schema de argumentos opcionales - sin argsSchema para evitar conflictos de tipo
    },

    // 🛠️ Handler que genera el prompt para buscar videos del repositorio
    handler: (params: RepositoryVideosParams = {}) => {
        const { includeChannel = 'returngis' } = params;

        // 📝 Construir mensaje para buscar videos relacionados con el repo
        const instructions = `¡Dale, che! 🇦🇷 Vamos a buscar videos en YouTube que estén relacionados con este repositorio de MCP Servers y Nerdearla Spain 2025.

**Lo que necesito que hagas:**

1. Usá la herramienta search_video para buscar contenido sobre:
   - "MCP Servers" 
   - "Model Context Protocol"
   - "Nerdearla Spain 2025"
   - "MCP SDK Anthropic"

2. ${includeChannel === 'returngis' 
    ? 'Priorizá el canal "returngis" (canal de Gisela Torres), pero si no encontrás videos ahí, buscá en otros canales también.'
    : 'Buscá en todos los canales disponibles.'}

3. Para cada video que encuentres, mostrá:
   - **Título:** (título completo del video)
   - **Canal:** (nombre del canal)
   - **URL:** (link al video)
   - **Descripción:** (una mini descripción cortita)

4. Ordená los resultados poniendo primero los del canal returngis si los hay.

¡Vamos con toda! 🚀🧉 Mostrá los resultados con buena onda y bien organizaditos.`;

        return {
            // 📤 Retornar el mensaje con las instrucciones
            messages: [
                {
                    role: "assistant" as const,
                    content: {
                        type: "text" as const,
                        text: instructions
                    }
                }
            ]
        };
    }
};

export const prompts = [
    searchYoutubeVideosPrompt as any,
    findRepositoryVideosPrompt as any
];

