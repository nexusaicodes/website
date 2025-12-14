/**
 * Handles smooth scrolling to a target element by ID
 * @param {Event} e - The click event
 * @param {string} targetId - The ID of the target element (without the # prefix)
 */
export const handleSmoothScroll = (e, targetId) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
