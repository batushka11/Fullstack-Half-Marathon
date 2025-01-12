USE ucode_web;

SELECT h.name
FROM heroes h
JOIN heroes_teams ht 
ON h.id = ht.hero_id
JOIN teams t 
ON ht.team_id = t.id
JOIN races r 
ON h.race_id = r.id
WHERE h.id IN (
    SELECT hero_id
    FROM heroes_teams
    GROUP BY hero_id
    HAVING COUNT(team_id) >= 2
)
AND r.name != 'Human'
AND h.name LIKE '%a%'
AND (h.class_role = 'tankman' OR h.class_role = 'healer')
ORDER BY h.id ASC
LIMIT 1;

