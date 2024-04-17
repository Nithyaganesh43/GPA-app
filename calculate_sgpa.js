function calculateAndRedirect(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const name = document.getElementById('name').value;
    const psc = parseInt(document.getElementById('psc').value);
    const add = parseInt(document.getElementById('add').value);
    const pis = parseInt(document.getElementById('pis').value);
    const tamil = parseInt(document.getElementById('tamil').value);
    const english = parseInt(document.getElementById('english').value);
    const maths = parseInt(document.getElementById('maths').value);
    const ep_lab = parseInt(document.getElementById('ep_lab').value);
    const psc_lab = parseInt(document.getElementById('psc_lab').value);
    const soft_skills = parseInt(document.getElementById('soft_skills').value);

    // Calculate SGPA
    const totalGrades = tamil*1 + english*3 + maths*4 + pis*4 + psc*3 + add*3 + ep_lab*1 + psc_lab*2 + soft_skills*1;
    const sgpa = totalGrades / 22.0;

    // Round SGPA to two decimal places
    const roundedSgpa = sgpa.toFixed(1);

    // Redirect to result page with calculated SGPA and name as URL parameters
    window.location.href = `result.html?name=${encodeURIComponent(name)}&sgpa=${roundedSgpa}`;
}
