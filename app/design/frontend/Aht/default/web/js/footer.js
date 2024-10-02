document.addEventListener('DOMContentLoaded', function () {
    var emailInput = document.getElementById('newsletter');
    var checkbox = document.getElementById('footer-checkbox');
    var submitButton = document.querySelector('.action.subscribe');

    submitButton.disabled = true;

    emailInput.addEventListener('input', function () {
        if (emailInput.value.trim() !== '') {
            checkbox.disabled = false;
        } else {
            checkbox.disabled = true;
            submitButton.disabled = true;
        }
    });

    checkbox.addEventListener('change', function () {
        submitButton.disabled = !checkbox.checked;
    });
});

