document.querySelectorAll('.red-node-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block'; // Toggle display
    });
});

document.querySelectorAll('.blue-node-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block'; // Toggle display
    });
});
