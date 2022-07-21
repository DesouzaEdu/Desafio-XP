DROP DATABASE IF EXISTS DbInvest;

CREATE DATABASE DbInvest;

USE DbInvest;

CREATE TABLE cliente (
    id INT NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE ativos (
    id INT NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
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

INSERT INTO DbInvest.cliente (nome) VALUES
    ("Eduardo de Souza"),
    ("Guilherme Benchimol"),
    ("Thiago Maffra");

INSERT INTO DbInvest.ativos  (nome, valor) VALUES
    ("XPBR31", 100.51),
    ("Bitcoin", 127167.50),
    ("Tesouro Selic", 11892.07);


INSERT INTO DbInvest.carteira (cliente_id, ativo_id, quantidade) VALUES
    (1, 1, 2),
    (2, 1, 1000),
    (2, 2, 10),
    (2, 3, 1),
    (3, 1, 500),
    (3, 2, 100),
    (3, 3, 5);