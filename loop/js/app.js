const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdf = $('a[href$=".pdf"]');
const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

$secureLinks.attr('target', '_blank');
$pdf.attr('download', true);

$secureLinks.addClass('secure');
$pdf.addClass('pdf');

$pdf.on('click', function(e) {
    if($(':checked').length === 0) {
        e.preventDefault();
        alert('Please check the checkbox.');
    }
});

$('#links').append($pdfCheckbox);

$('a').each(function() {
    const url = $(this).attr('href');
    $(this).parent().append(` (${url})`);
})