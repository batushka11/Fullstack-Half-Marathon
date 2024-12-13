USE ucode_web;

INSERT INTO powers (name, type) VALUES 
('bloody fist', 'attack'),
('iron shield', 'defense'),
('fire blast', 'attack'),
('energy barrier', 'defense');

INSERT INTO races (name) VALUES 
('Human'),
('Kree'),
('Asgardian');

UPDATE heroes
SET race_id = (SELECT id FROM races WHERE name = 'Human')
WHERE name IN ('Iron Man', 'Captain America', 'Doctor Strange', 'Quicksilver','Eclipse');

UPDATE heroes
SET race_id = (SELECT id FROM races WHERE name = 'Asgardian')
WHERE name IN ('Thor', 'Scarlet Witch');

UPDATE heroes
SET race_id = (SELECT id FROM races WHERE name = 'Kree')
WHERE name IN ('Shadowblade', 'Aegis', 'Stellarion', 'Aethera');

INSERT INTO teams (name) VALUES 
('Avengers'),
('Hydra'),
('Guardians of the Galaxy');

INSERT INTO heroes_teams (hero_id, team_id) VALUES 
((SELECT id FROM heroes WHERE name = 'Iron Man'), (SELECT id FROM teams WHERE name = 'Avengers')),
((SELECT id FROM heroes WHERE name = 'Iron Man'), (SELECT id FROM teams WHERE name = 'Hydra')),
((SELECT id FROM heroes WHERE name = 'Captain America'), (SELECT id FROM teams WHERE name = 'Avengers')),
((SELECT id FROM heroes WHERE name = 'Thor'), (SELECT id FROM teams WHERE name = 'Avengers')),
((SELECT id FROM heroes WHERE name = 'Scarlet Witch'), (SELECT id FROM teams WHERE name = 'Avengers')),
((SELECT id FROM heroes WHERE name = 'Doctor Strange'), (SELECT id FROM teams WHERE name = 'Avengers')),
((SELECT id FROM heroes WHERE name = 'Quicksilver'), (SELECT id FROM teams WHERE name = 'Avengers')),
((SELECT id FROM heroes WHERE name = 'Shadowblade'), (SELECT id FROM teams WHERE name = 'Hydra')),
((SELECT id FROM heroes WHERE name = 'Aegis'), (SELECT id FROM teams WHERE name = 'Avengers')),
((SELECT id FROM heroes WHERE name = 'Aegis'), (SELECT id FROM teams WHERE name = 'Hydra')),
((SELECT id FROM heroes WHERE name = 'Stellarion'), (SELECT id FROM teams WHERE name = 'Guardians of the Galaxy')),
((SELECT id FROM heroes WHERE name = 'Aethera'), (SELECT id FROM teams WHERE name = 'Guardians of the Galaxy'));

INSERT INTO heroes_powers (hero_id, power_id, power_points) VALUES 
((SELECT id FROM heroes WHERE name = 'Iron Man'), (SELECT id FROM powers WHERE name = 'iron shield'), 150),
((SELECT id FROM heroes WHERE name = 'Iron Man'), (SELECT id FROM powers WHERE name = 'fire blast'), 180),
((SELECT id FROM heroes WHERE name = 'Captain America'), (SELECT id FROM powers WHERE name = 'iron shield'), 200),
((SELECT id FROM heroes WHERE name = 'Thor'), (SELECT id FROM powers WHERE name = 'bloody fist'), 210),
((SELECT id FROM heroes WHERE name = 'Thor'), (SELECT id FROM powers WHERE name = 'iron shield'), 190),
((SELECT id FROM heroes WHERE name = 'Scarlet Witch'), (SELECT id FROM powers WHERE name = 'fire blast'), 250),
((SELECT id FROM heroes WHERE name = 'Scarlet Witch'), (SELECT id FROM powers WHERE name = 'energy barrier'), 230),
((SELECT id FROM heroes WHERE name = 'Doctor Strange'), (SELECT id FROM powers WHERE name = 'energy barrier'), 220),
((SELECT id FROM heroes WHERE name = 'Doctor Strange'), (SELECT id FROM powers WHERE name = 'iron shield'), 200),
((SELECT id FROM heroes WHERE name = 'Quicksilver'), (SELECT id FROM powers WHERE name = 'bloody fist'), 180),
((SELECT id FROM heroes WHERE name = 'Shadowblade'), (SELECT id FROM powers WHERE name = 'bloody fist'), 190),
((SELECT id FROM heroes WHERE name = 'Aegis'), (SELECT id FROM powers WHERE name = 'energy barrier'), 240),
((SELECT id FROM heroes WHERE name = 'Stellarion'), (SELECT id FROM powers WHERE name = 'fire blast'), 230),
((SELECT id FROM heroes WHERE name = 'Stellarion'), (SELECT id FROM powers WHERE name = 'energy barrier'), 210),
((SELECT id FROM heroes WHERE name = 'Aethera'), (SELECT id FROM powers WHERE name = 'energy barrier'), 200),
((SELECT id FROM heroes WHERE name = 'Aethera'), (SELECT id FROM powers WHERE name = 'iron shield'), 180),
((SELECT id FROM heroes WHERE name = 'Eclipse'), (SELECT id FROM powers WHERE name = 'energy barrier'), 220),
((SELECT id FROM heroes WHERE name = 'Eclipse'), (SELECT id FROM powers WHERE name = 'iron shield'), 150);

