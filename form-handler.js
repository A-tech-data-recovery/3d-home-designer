document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('startProjectForm');

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Collect Data
            const fullName = document.getElementById('fullName').value.trim();
            const mobileNumber = document.getElementById('mobileNumber').value.trim();
            const plotLength = document.getElementById('plotLength').value.trim();
            const plotWidth = document.getElementById('plotWidth').value.trim();
            
            const surroundEast = document.getElementById('surroundEast').value;
            const surroundWest = document.getElementById('surroundWest').value;
            const surroundNorth = document.getElementById('surroundNorth').value;
            const surroundSouth = document.getElementById('surroundSouth').value;
            
            const houseFront = document.getElementById('houseFront').value;
            const roadType = document.getElementById('roadType').value;
            const customMessage = document.getElementById('customMessage').value.trim();

            // Format Message for WhatsApp
            let waMessage = `*New Project Inquiry - 3D Home Designer*%0A%0A`;
            waMessage += `*Personal Details:*%0A`;
            waMessage += `- Name: ${fullName}%0A`;
            waMessage += `- Mobile: ${mobileNumber}%0A%0A`;
            
            waMessage += `*Plot Dimensions:*%0A`;
            waMessage += `- Size: ${plotLength} ft (L) x ${plotWidth} ft (W)%0A%0A`;
            
            waMessage += `*Surroundings:*%0A`;
            waMessage += `- East: ${surroundEast}%0A`;
            waMessage += `- West: ${surroundWest}%0A`;
            waMessage += `- North: ${surroundNorth}%0A`;
            waMessage += `- South: ${surroundSouth}%0A%0A`;
            
            waMessage += `*Front and Road:*%0A`;
            waMessage += `- House Facing: ${houseFront}%0A`;
            waMessage += `- Road Type: ${roadType}%0A%0A`;

            if(customMessage) {
                waMessage += `*Additional Requirements:*%0A`;
                waMessage += `${customMessage}%0A%0A`;
            }
            
            waMessage += `Please review these details and contact me.`;

            // WhatsApp Number
            const waNumber = '919628635252'; 
            const waURL = `https://wa.me/${waNumber}?text=${waMessage}`;

            // Security & Loading State
            const submitBtn = document.getElementById('submitBtn');
            const btnIcon = submitBtn.querySelector('.btn-icon');
            const btnText = submitBtn.querySelector('.btn-text');
            const loaderIcon = submitBtn.querySelector('.loader-icon');

            // Disable button to prevent multiple clicks
            submitBtn.disabled = true;
            btnIcon.style.display = 'none';
            btnText.textContent = 'Redirecting to WhatsApp...';
            loaderIcon.style.display = 'inline-block';

            // Simulate processing time for UX, then redirect
            setTimeout(() => {
                window.open(waURL, '_blank');
                
                // Reset button state after opening
                submitBtn.disabled = false;
                btnIcon.style.display = 'inline-block';
                btnText.textContent = 'SEND DETAILS ON WHATSAPP';
                loaderIcon.style.display = 'none';
                form.reset(); // Clear the form
            }, 1500);
        });
    }
});
