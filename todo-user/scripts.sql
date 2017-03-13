
CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    birthdate DATE,
    gender VARCHAR(1),
    PRIMARY KEY(id)
);


INSERT INTO user(name,birthdate,gender) VALUES
('Tiago','1991-04-27','M'),
('Diego','1994-04-05','M'),
('Aloisio','1961-04-17','M'),
('Maria','1968-02-03','F');