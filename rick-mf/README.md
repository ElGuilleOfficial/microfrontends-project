# 📦 Microfrontend — Rick And Morty

Este proyecto es parte de una arquitectura basada en **microfrontends**, y se encarga de mostrar personajes de la serie **Harry Potter**.

---

## 🧠 ¿Qué es un Microfrontend?

Un **microfrontend** es un enfoque arquitectónico que divide una aplicación web en múltiples aplicaciones más pequeñas y autónomas. Cada una de ellas puede ser desarrollada, desplegada y mantenida de forma independiente, incluso por diferentes equipos, y luego integrarse en una aplicación host (contenedora) mediante técnicas como **Module Federation** de Webpack/Vite.

---

## 🛠 Tecnologías utilizadas

- ⚛️ **React**
- ⚡ **Vite**
- 🧩 **Module Federation** vía [`vite-plugin-federation`](https://github.com/originjs/vite-plugin-federation)
- 🧪 **Testing Library + Jest** (opcional)
- 🌐 **Vercel** para despliegue

---

## 🚀 ¿Cómo correr este microfrontend localmente?

```bash
# 1. Clonar el repositorio
git clone https://github.com/ElGuilleOfficial/microfrontends-project.git
cd microfrontends-project/rick-mf

# 2. Instalar dependencias
yarn install

# 3. Build y correr el servidor de vista previa
yarn build
yarn preview --port 5001