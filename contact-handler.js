document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('startProjectForm');

    if(form){

        form.addEventListener('submit', function(e){

            e.preventDefault();

            const name = document.getElementById('customerName').value.trim();
            const mobile = document.getElementById('mobileNumber').value.trim();
            const email = document.getElementById('email').value.trim();
            const address = document.getElementById('address').value.trim();
            const service = document.getElementById('serviceType').value;
            const message = document.getElementById('additionalMessage').value.trim();

            const submitBtn = document.getElementById('submitBtn');

            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Redirecting...';

            const timeStamp = new Date().toLocaleString();

            let waMessage = `🏗️ NEW CONSULTATION REQUEST %0A%0A`;

            waMessage += `👤 Customer Name: ${name}%0A`;
            waMessage += `📱 Mobile Number: ${mobile}%0A`;
            waMessage += `📧 Email: ${email}%0A`;
            waMessage += `📍 Address: ${address}%0A`;
            waMessage += `📋 Service Required: ${service}%0A`;
            waMessage += `📅 Request Time: ${timeStamp}%0A%0A`;

            if(message){
                waMessage += `📝 Additional Requirement:%0A${message}%0A%0A`;
            }

            waMessage += `Please contact this customer.`;

            // Fill phone number
            const waNumber = '919628635252';

            const waURL = `https://wa.me/${waNumber}?text=${waMessage}`;

            setTimeout(() => {

                window.open(waURL, '_blank');

                submitBtn.disabled = false;
                submitBtn.innerHTML = 'SEND ON WHATSAPP';

                form.reset();

            },1000);

        });

    }

});