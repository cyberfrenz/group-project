$(document).ready(function() {
    $('#AscendPage').fullpage({
        anchors: ['1', '2', '3', '4','5'],
        sectionsColor: ['', '#E5E5E5', '' , '#aeaeae'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Splash Page', 'About Us', 'Benefits', 'Sponsors', 'Signup!'],
        responsive: 900
    });
    $("#arrow-wrap").slideUp(300).delay(3000).fadeIn(400); 
});