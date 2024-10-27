const confirmButton = document.querySelector('.confirm-button');
confirmButton.addEventListener('click', function validateForm() {
    const name = document.getElementById('text');
    const cardNumber = document.getElementById('card-number');
    const expiryMonth = document.getElementById('month');
    const expiryYear = document.getElementById('year');
    const cvc = document.getElementById('cvc');

    const nameError = document.querySelector('.name-error');
    const numberError = document.querySelector('.number-error');
    const expiryError = document.querySelector('.exp-error');
    const cvcError = document.querySelector('.cvc-error');

    let isValid = true;

    // Verificação do nome titular
    if(name.value.trim() === '') {
        nameError.textContent = 'O nome do titular não pode estar vazio.';
        nameError.style.color = 'red';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    };

    //validação do número do cartão
    const cardNumberValue = cardNumber.value.replace(/\s+/g, '');
    if(!/^\d{16}$/.test(cardNumberValue)) {
        numberError.textContent = 'O número do cartão deve ter 16 dígitos';
        numberError.style.color = 'red';
        numberError.style.display = 'block';
        isValid = false;
    } else {
        numberError.style.display = 'none';
    };

    //validação da data de expiração 
    const month = parseInt(expiryMonth.value, 10);
    const year = parseInt(expiryYear.value, 10) + 2000;
    const currentDate = new Date();
    const expiryDate = new Date(year, month-1);

    if(!month || month < 1 || month > 12 || !year || year < currentDate.getFullYear() || expiryDate < currentDate) {
        expiryError.textContent = 'Data de validade inválida';
        expiryError.style.color = 'red';
        expiryError.style.display = 'block';
        isValid = false;
    } else {
        expiryError.style.display = 'none';
    };

    // validação do cvc 
    if(!/^\d{3}$/.test(cvc.value)) {
        cvcError.textContent = 'O cvc deve ter 3 dígitos';
        cvcError.style.color = 'red';
        cvcError.style.display = 'block';
    } else {
        cvcError.style.display = 'none';
    };

    if(isValid) {
        alert('Cartão validado com sucesso!');
    };
});