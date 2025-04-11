# 🧩 Microfrontend Host

This project acts as the main container (host) within a microfrontend architecture. Its purpose is to orchestrate and render independent microfrontends—such as those for Rick and Morty and Harry Potter—using Module Federation with Vite.

---

## 🧠 What is a Microfrontend?

A microfrontend is an architecture that decomposes a large web application into multiple smaller, self-contained applications. Each microfrontend can be developed, tested, and deployed separately, and then integrated into a central container or host.

---

## 🎯 What is the host used for?

The host is responsible for:

- Integrating the Rick and Morty and Harry Potter microfrontends.
- Managing the main design.
- Orchestrate language switching (i18n), navigation, and dynamic loading of microfronts.
- Serve as a single entry point for the entire application.

---

## 🛠 Technologies used

- ⚛️ **React**
- ⚡ **Vita**
- 🧩 **Module federation** via [`vite-plugin-federation`](https://github.com/originjs/vite-plugin-federation)
- 🌐 **Vercel** for deployment
- 🔠 **i18n** (internationalization)

---

## 🚀 How to run the host locally?

```
# 1. Clone the repository
git clone https://github.com/your-user/microfrontends-project.git
cd microfrontends-project/host-application

# 2. Install dependencies
yarn installation

# 3. Run the development server
yarn developer