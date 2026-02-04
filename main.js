document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const mainNumbersDiv = document.getElementById('mainNumbers');
    const bonusNumberDiv = document.getElementById('bonusNumber');

    generateBtn.addEventListener('click', generateLottoNumbers);

    function generateLottoNumbers() {
        mainNumbersDiv.innerHTML = '';
        bonusNumberDiv.innerHTML = '';

        const lottoNumbers = new Set();
        while (lottoNumbers.size < 6) {
            lottoNumbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const numbersArray = Array.from(lottoNumbers).sort((a, b) => a - b);
        const mainNumbers = numbersArray.slice(0, 5);
        const bonusNumber = numbersArray[5];

        mainNumbers.forEach(num => {
            const span = document.createElement('span');
            span.textContent = num;
            span.classList.add('lotto-ball', 'main-ball');
            mainNumbersDiv.appendChild(span);
        });

        const bonusSpan = document.createElement('span');
        bonusSpan.textContent = bonusNumber;
        bonusSpan.classList.add('lotto-ball', 'bonus-ball');
        bonusNumberDiv.appendChild(bonusSpan);
    }
});