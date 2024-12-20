document.addEventListener('DOMContentLoaded', () => {
    const projectElements = document.querySelectorAll('.project');
    
    projectElements.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.style.transform = 'scale(1.02)';
            project.style.transition = 'transform 0.3s ease';
        });
        
        project.addEventListener('mouseout', () => {
            project.style.transform = 'scale(1)';
        });
    });
});