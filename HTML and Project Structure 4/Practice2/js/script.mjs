export function greet() {
    alert("Hello from .mjs module!");
}
greet();
window.greet = greet;