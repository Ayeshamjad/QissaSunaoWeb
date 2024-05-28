function toggleFaq(faqId) {
    var faq = document.getElementById(faqId);
    var icon = document.getElementById(faqId + '-icon');
    if (faq.style.display === 'none') {
        faq.style.display = 'block';
        icon.textContent = '-';
    } else {
        faq.style.display = 'none';
        icon.textContent = '+';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.navigation .btn-group .btn');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const heartButtons = document.querySelectorAll('.btn-heart');

    heartButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });
});
$(document).ready(function(){
    $('#faqAccordion').on('show.bs.collapse', function (e) {
        $(e.target).prev('.card-header').find('.faq-toggle-icon').text('-');
    });

    $('#faqAccordion').on('hide.bs.collapse', function (e) {
        $(e.target).prev('.card-header').find('.faq-toggle-icon').text('+');
    });
});

