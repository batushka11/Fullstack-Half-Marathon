USE ucode_web;

CREATE TABLE IF NOT EXISTS powers(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL UNIQUE,
    type enum("attack", "defense") NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS races(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL UNIQUE,
    PRIMARY KEY(id)
);

ALTER TABLE heroes ADD race_id int NOT NULL;
ALTER TABLE heroes ADD FOREIGN KEY (race_id) REFERENCES races (id) ON DELETE CASCADE;

CREATE TABLE IF NOT EXISTS teams(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL UNIQUE,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS heroes_teams(
    hero_id int NOT NULL,
    team_id int NOT NULL,
    PRIMARY KEY(team_id,hero_id),
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
); 

CREATE TABLE IF NOT EXISTS heroes_powers(
    hero_id int NOT NULL,
    power_id int NOT NULL,
    power_points int NOT NULL,
    PRIMARY KEY (hero_id,power_id),
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE,
    FOREIGN KEY (power_id) REFERENCES powers(id) ON DELETE CASCADE
);

