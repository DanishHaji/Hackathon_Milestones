// Ensure variables are declared only once in the correct scope
const skillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLUListElement;

// Check if the button and skills section exist before adding the event listener
if (skillsButton && skillsSection) {
    // Add event listener for toggling the visibility of the skills section
    skillsButton.addEventListener("click", () => {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";  // Show skills
            skillsButton.textContent = "Hide Skills"; // Update button text
        } else {
            skillsSection.style.display = "none";  // Hide skills
            skillsButton.textContent = "Show Skills"; // Update button text
        }
    });
} else {
    console.warn("Skills section or toggle button not found.");
}
