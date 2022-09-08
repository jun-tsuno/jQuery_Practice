const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdf = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank');
$pdf.attr('download', true);

$secureLinks.addClass('secure');
$pdf.addClass('pdf');