document.querySelectorAll(".copy").forEach((button) => {
  button.addEventListener("click", async () => {
    const code =
      button.closest(".codebox")?.querySelector("code")?.innerText || "";
    await navigator.clipboard.writeText(code);
    const old = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => (button.textContent = old), 900);
  });
});
document.querySelector("[data-search]")?.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  document.querySelectorAll(".endpoint").forEach((node) => {
    node.style.display =
      !query || node.innerText.toLowerCase().includes(query) ? "" : "none";
  });
});
