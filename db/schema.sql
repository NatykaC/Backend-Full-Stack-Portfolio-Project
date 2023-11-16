DROP DATABASE IF EXISTS crystals_dev;
CREATE DATABASE crystals_dev;

\c crystals_dev;

CREATE TABLE crystals (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    color VARCHAR(50) NOT NULL,
    hardness INTEGER,
    rarity TEXT,
    can_be_water_cleansed BOOLEAN,
    healing_effects TEXT,
    collected_on DATE,
    favorite BOOLEAN
)