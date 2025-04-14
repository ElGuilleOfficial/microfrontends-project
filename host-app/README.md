# 🧩 Microfrontend Host

This project serves as the **main container (host)** within a **microfrontend architecture**. Its purpose is to orchestrate and render independent microfrontends—such as **Rick and Morty** and **Harry Potter**—using **Module Federation** with Vite.

---

## 🧠 What is a Microfrontend?

A **microfrontend** is an architectural style where a large web application is broken down into smaller, independent apps. Each microfrontend can be developed, tested, and deployed separately, and then integrated into a central container or *host*.

---

## 🎯 What is the host used for?

The host is responsible for:

- Integrating the Rick and Morty and Harry Potter microfrontends.
- Managing the main layout.
- Orchestrating language switching (i18n), navigation, and dynamic loading of microfronts.
- Serving as the single entry point for the entire application.

---

## 🛠 Technologies used

- ⚛️ **React**
- ⚡ **Vite**
- 🧩 **Module Federation** via [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)
- 🧪 **Testing Library + Vitest**
- 🌐 **Vercel** for deployment
- 🔠 **i18n** (internationalization)

---

## 🚀 How to run the host locally?

```bash
# 1. Clone the repository
git clone https://github.com/ElGuilleOfficial/microfrontends-project.git
cd microfrontends-project/host-app

# 2. Install dependencies
yarn install

# 3. Start the development server
yarn dev

# 4. Units Test
yarn test
