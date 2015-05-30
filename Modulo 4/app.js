/**
 * @author Alejandro Perez Martin
 * @url https://www.linkedin.com/in/aleperez92
 * */

'use strict';

var express = require('express'),
    app = express();

var port = 3000;

app.get('/preguntas', function (req, res) {
    res.send('<html><body><h2>Preguntas</h2><form action="/respuestas" method="get">' + '<input type="hidden" name="idpregunta" value="1">' + '<label for="respuesta">¿Quién descubrió América?</label> ' + '<input type="text" name="respuesta" placeholder="Tu respuesta...">' + '<input type="submit" name="submit" value="Enviar">' + '</form>' + '<form action="/respuestas" method="get">' + '<input type="hidden" name="idpregunta" value="2">' + '<label for="respuesta">¿Capital de Portugal?</label> ' + '<input type="text" name="respuesta" placeholder="Tu respuesta...">' + '<input type="submit" name="submit" value="Enviar">' + '</form><body></html>');
});

app.get('/respuestas', function (req, res) {

    var msg = "";

    if ((req.query.idpregunta == 1 && /crist[oó]bal col[oó]n/i.test(req.query.respuesta)) ||
        (req.query.idpregunta == 2 && /lisboa/i.test(req.query.respuesta))) {
        msg = "<strong>Felicidades, has contestado correctamente a la respuesta.</strong>";
    }
    else {
        msg = "Lo sentimos, la respuesta correcta era <em>" + ((req.query.idpregunta == 1) ? 'Cristóbal Colón' : 'Lisboa') + '</em>.';
    }

    res.send(msg + '<p><a href="/preguntas" title="Volver a la página inicial">Volver a la página inicial</a></p>');

});

app.listen(port, function () {
    console.log("Servidor ejecutado en: http://localhost:" + port);
});
