# JavaScript DOM and Event Handling Concepts

This document explains key concepts in JavaScript related to DOM selection, manipulation, and event handling. Each section answers a specific question with clarity and practical insight.

---

## 1. Difference Between `getElementById`, `getElementsByClassName`, `querySelector`, and `querySelectorAll`

| Method                  | Selector Type     | Returns             | Live Collection | Notes |
|------------------------|-------------------|---------------------|-----------------|-------|
| `getElementById`       | ID (`#id`)        | Single Element      | No              | Fastest for ID lookup |
| `getElementsByClassName` | Class (`.class`) | HTMLCollection      | Yes             | Returns all matching elements |
| `querySelector`        | CSS Selector      | First Match         | No              | Flexible, supports complex selectors |
| `querySelectorAll`     | CSS Selector      | NodeList (all matches) | No           | Useful for selecting multiple elements |

- `getElementById` is ideal for selecting a unique element.
- `getElementsByClassName` returns a live collection that updates with DOM changes.
- `querySelector` and `querySelectorAll` support any valid CSS selector, making them more versatile.

---

## 2. How to Create and Insert a New Element into the DOM

To dynamically add an element:

```javascript
const newDiv = document.createElement('div'); // Create element
newDiv.textContent = 'Hello World';           // Add content
newDiv.classList.add('greeting');             // Add class
document.body.appendChild(newDiv);            // Insert into DOM