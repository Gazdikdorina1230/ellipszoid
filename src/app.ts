/*
* File: app.js
* Author: Gazdik Dorina
* Copyright: 2024, Gazdik Dorina
* Group: Szoft I-1-N
* Date: 2024-05-30
* Github: https://github.com/Gazdikdorina1230/
* Licenc: GNU GPL
*/

function calculateEllipsoidVolume(a: number, b: number, c: number): number {
    return (4 / 3) * Math.PI * a * b * c;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ellipsoidForm') as HTMLFormElement;
    const resultDisplay = document.getElementById('result') as HTMLDivElement;

    form.onsubmit = (event) => {
        event.preventDefault();
        const a = parseFloat((document.getElementById('axisA') as HTMLInputElement).value);
        const b = parseFloat((document.getElementById('axisB') as HTMLInputElement).value);
        const c = parseFloat((document.getElementById('axisC') as HTMLInputElement).value);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            resultDisplay.innerText = 'Please enter valid numbers for all axes.';
        } else {
            const volume = calculateEllipsoidVolume(a, b, c);
            resultDisplay.innerText = `Az ellipszoid térfogata ${volume.toFixed(2)} köbegység.`;
        }
    };
});
