# 📦 Microfrontend — Rick and Morty

This project is part of a **microfrontend** architecture and is responsible for displaying characters from the **Rick and Morty** series.

---

## 🧠 What is a Microfrontend?

A **microfrontend** is an architectural approach that breaks a web application into smaller, independent apps. Each microfrontend can be developed, deployed, and maintained separately—potentially by different teams—and later integrated into a host application using techniques such as **Module Federation** (via Webpack or Vite).

---

## 🛠 Technologies Used

- ⚛️ **React**
- ⚡ **Vite**
- 🧩 **Module Federation** via [`vite-plugin-federation`](https://github.com/originjs/vite-plugin-federation)
- 🧪 **Testing Library + Jest + Babel (TypeScript and JSX transpilation)**
- 🌐 **Vercel** for deployment
- 🔠 **i18n** (internationalization)

---

## 🚀 How to run this microfrontend locally?

```bash
# 1. Clone the repository
git clone https://github.com/ElGuilleOfficial/microfrontends-project.git
cd microfrontends-project/rick-mf

# 2. Install dependencies
yarn install

# 3. Build and run the preview server
yarn build
yarn preview --port 5001

# 4. Units Test
yarn test
