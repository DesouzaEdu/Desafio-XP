DROP DATABASE IF EXISTS DbInvest;

CREATE DATABASE DbInvest;

USE DbInvest;

CREATE TABLE cliente (
    id INT NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
    saldo DECIMAL (10,2) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE ativos (
    id INT NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
    quantidade INT NOT NULL,
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

INSERT INTO DbInvest.cliente (nome, saldo) VALUES
    ("Eduardo de Souza", 0.99),
    ("Guilherme Benchimol", 1000000.5),
    ("Thiago Maffra", 500000.5);

INSERT INTO DbInvest.ativos  (nome, quantidade, valor) VALUES
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