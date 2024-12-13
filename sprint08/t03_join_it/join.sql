USE ucode_web;

/* 1 */
SELECT heroes.name AS hero_name, teams.name AS team_name
FROM ucode_web.heroes
LEFT JOIN ucode_web.heroes_teams
ON heroes.id = heroes_teams.hero_id
LEFT JOIN ucode_web.teams
ON heroes_teams.team_id = teams.id;

/* 2 */

SELECT heroes.name AS hero_name, powers.name AS power_name
FROM ucode_web.powers
LEFT JOIN ucode_web.heroes_powers
ON heroes_powers.power_id = powers.id
LEFT JOIN ucode_web.heroes
ON heroes.id = heroes_powers.hero_id;

/* 3 */

SELECT heroes.name AS hero_name, powers.name AS power_name, teams.name AS team_name
FROM ucode_web.heroes
INNER JOIN ucode_web.heroes_teams
ON heroes.id = heroes_teams.hero_id
LEFT JOIN ucode_web.teams
ON heroes_teams.team_id = teams.id
INNER JOIN ucode_web.heroes_powers
ON heroes.id = heroes_powers.hero_id
LEFT JOIN ucode_web.powers
ON heroes_powers.power_id = powers.id;

