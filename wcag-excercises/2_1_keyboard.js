


document.addEventListener('DOMContentLoaded', () => {
    const trapContainer = document.getElementById('trap-container');
    const buttons = trapContainer.querySelectorAll('button, input,textarea');

    trapContainer.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            let focusIndex = Array.from(buttons).indexOf(document.activeElement);
            
            if (event.shiftKey) {
                // Shift + Tab (go backwards)
                focusIndex = (focusIndex === 0) ? buttons.length - 1 : focusIndex - 1;
            } else {
                // Tab (go forwards)
                focusIndex = (focusIndex === buttons.length - 1) ? 0 : focusIndex + 1;
            }

            buttons[focusIndex].focus();
        }
    });
});