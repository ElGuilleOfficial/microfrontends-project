# Microfrontends Project - Rick And Morty & Harry Potter Characters

This project implements a microfrontend architecture using **React**, **Vite**, and **vite-plugin-federation**. It consists of a main application (host) that consumes two microfrontends:

- `Rick And Morty`: Microfrontend displaying Rick and Morty characters
- `Harry Potter`: Microfrontend displaying Harry Potter characters

---

## 🧪 Technologies Used

This project was built using the following technologies and tools:

- ⚛️ **React**
- ⚡ **Vite**
- 🧩 **vite-plugin-federation**
- 🧠 **react-i18next and i18next**
- 💅 **Styled Components with BEM Methodology**
- 🧪 **Testing Library y Jest**

---

## 🌍 Language Support

The application supports **English** and **Spanish**.
Users can switch the language from the main interface (host), and this configuration is **automatically propagated** to the microfrontends via shared props and the use of `i18n`.

---

## 📦 Benefits of the Microfrontend Approach

- Each team can work **independently** on their microfrontend.
- Scalable for large teams and products.
- Easy to maintain and deploy separately.
- Allows different internal setups per microfrontend (e.g., translation systems, UI design, etc.).
