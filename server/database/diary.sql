DROP TABLE IF EXISTS diary;

CREATE TABLE diary_entries(
    id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category varchar(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO diary_entries (title, content, category)
VALUES
('test1', 'test2','test3');