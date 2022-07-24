DROP DATABASE IF EXISTS DbInvest;

CREATE DATABASE DbInvest;

USE DbInvest;

CREATE TABLE cliente (
    id INT NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
    usuario VARCHAR(30) NOT NULL,
    senha VARCHAR(30) NOT NULL,
    saldo DECIMAL (10,2) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE ativos (
    id INT NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
    quantidade_disponivel INT NOT NULL,
    valor DECIMAL (8,2) NOT NULL,
    PRIMARY KEY(id)
)  ENGINE=INNODB;

CREATE TABLE carteira (
    cliente_id INT NOT NULL,
    ativo_id INT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (cliente_id)
        REFERENCES cliente (id)
        ON DELETE CASCADE,
    FOREIGN KEY (ativo_id)
        REFERENCES ativos (id)
        ON DELETE CASCADE
) ENGINE=INNODB;



SET SQL_SAFE_UPDATES = 0;

INSERT INTO DbInvest.cliente (nome, usuario, senha, saldo) VALUES
    ("Eduardo de Souza", "admin", "admin", 0.99),
    ("Guilherme Benchimol", "gBench", "fundadorXP", 1000000.5),
    ("Thiago Maffra", "tMaffra", "CEOXP", 500000.5);

INSERT INTO DbInvest.ativos  (nome, quantidade_disponivel, valor) VALUES
    ("XPBR31", 31000, 100.51),
    ("Bitcoin", 20000000, 127167.50),
    ("Tesouro Selic", 24000000, 11892.07);

INSERT INTO DbInvest.carteira (cliente_id, ativo_id, quantidade) VALUES
    (1, 1, 2),
    (2, 1, 1000),
    (2, 2, 10),
    (2, 3, 1),
    (3, 1, 500),
    (3, 2, 100),
    (3, 3, 5);