DROP TABLE IF EXISTS diary_entries;

CREATE TABLE diary_entries(
    id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category varchar(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO diary_entries (title, content, category, entry_date)
VALUES

(
    'Morning Reflections',
    'Started the day with a peaceful walk in the park and a cup of coffee.',
    'Personal',
    '2026-01-12 07:45:00'
),
(
    'Work Progress',
    'Completed the database schema design for the new project today.',
    'Work',
    '2026-02-03 14:20:00'
),
(
    'Travel Plans',
    'Booked tickets for a weekend trip to Edinburgh next month.',
    'Travel',
    '2026-03-18 19:10:00'
),
(
    'Fitness Goals',
    'Went to the gym and completed a full-body workout session.',
    'Health',
    '2026-04-07 06:30:00'
),
(
    'Reading Notes',
    'Finished reading an inspiring book about productivity and habits.',
    'Education',
    '2026-05-01 21:15:00'
);