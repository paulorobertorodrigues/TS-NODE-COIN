"use strict";
exports.__esModule = true;
exports.Materia = exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, cpf, nota) {
        if (nota === void 0) { nota = 0; }
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.nota = nota;
    }
    return Aluno;
}());
exports.Aluno = Aluno;
var Materia = /** @class */ (function () {
    function Materia(nome, media, aluno) {
        this.nome = nome;
        this.media = media;
        this.aluno = aluno;
    }
    Materia.prototype.atribuirNota = function (nota, operador) {
        this.aluno.nota = eval("".concat(this.aluno.nota, " ").concat(operador, " ").concat(nota));
    };
    return Materia;
}());
exports.Materia = Materia;
