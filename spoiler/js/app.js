$('.spoiler').on('click', 'button', function(e) {
    $(this).prev().show();
    $(this).hide();
});

// Create the "Reveal spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
$('.spoiler').append($button);

$('.spoiler span').hide();



