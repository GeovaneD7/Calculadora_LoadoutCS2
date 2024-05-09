//  provavelmente este trecho não será usado
//    function equipamento(categoria, valor, imagem, lado); {
//        this.categoria = categoria;
//        this.valor = valor;
//        this.imagem = imagem;
//        this.lado = lado;
//    }

const objData = JSON.parse(Equipamentos)

$(document).ready(function() {
    // Torna as imagens arrastáveis usando jQuery UI
    $('img').draggable();

    // Define as tabelas como áreas onde as imagens podem ser soltas
    $('.table').droppable({
        drop: function(event, ui) {
            // Obtém a imagem que foi solta e a move para dentro da tabela
            $(this).append(ui.draggable);
        }
    });
});
