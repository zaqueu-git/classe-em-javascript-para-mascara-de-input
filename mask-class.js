/*
Utiliza jquery.mask.min.js para máscaras de inputs.
Também é necessário o jquery.
*/

$(document).ready(function() {    
    $('.mask-valor').mask('000.000.000.000.000,00', {reverse: true});
    $('.mask-cep').mask('00000-000');
    $('.mask-date').mask('00/00/0000');
    $('.mask-phone').mask('(00) 00000-0000');
    $('.mask-cnpj').mask('00.000.000/0000-00');
    $('.mask-cpf').mask('000.000.000-00');
    $('.mask-rg').mask('00.000.000-0');
});