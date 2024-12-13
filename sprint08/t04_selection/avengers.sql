USE ucode_web;

/*1*/
SELECT h.id, h.name, SUM(hp.power_points) AS total_power
FROM heroes h
JOIN heroes_powers hp 
ON h.id = hp.hero_id
JOIN powers p 
ON hp.power_id = p.id
GROUP BY h.id
ORDER BY total_power DESC, h.id ASC
LIMIT 1;

/*2*/
SELECT h.id, h.name, SUM(hp.power_points) AS total_defense
FROM heroes h
JOIN heroes_powers hp 
ON h.id = hp.hero_id
JOIN powers p 
ON hp.power_id = p.id
WHERE p.type = 'defense'
GROUP BY h.id
ORDER BY total_defense ASC, h.id ASC
LIMIT 1;

/*3*/
WITH double_agent AS (
    SELECT h.id
    FROM heroes h
    JOIN heroes_teams ht 
    ON h.id = ht.hero_id
    GROUP BY h.id
    HAVING COUNT(ht.team_id) >= 2
)

SELECT h.id, h.name, SUM(hp.power_points) AS total_power
FROM heroes h
JOIN heroes_teams ht 
ON h.id = ht.hero_id
JOIN teams t 
ON ht.team_id = t.id
JOIN heroes_powers hp 
ON h.id = hp.hero_id
JOIN powers p 
ON hp.power_id = p.id
WHERE t.name = 'Avengers' AND h.id NOT IN (SELECT id FROM double_agent)
GROUP BY h.id
ORDER BY total_power DESC;

/*4*/
SELECT t.name, SUM(hp.power_points) AS total_power
FROM heroes h
JOIN heroes_teams ht 
ON h.id = ht.hero_id
JOIN teams t 
ON ht.team_id = t.id
JOIN heroes_powers hp 
ON h.id = hp.hero_id
JOIN powers p 
ON hp.power_id = p.id
WHERE t.name IN ('Avengers', 'Hydra')
GROUP BY t.name
ORDER BY total_power ASC;

