DROP DATABASE IF EXISTS crystals_dev;
CREATE DATABASE crystals_dev;

\c crystals_dev;

CREATE TABLE crystals (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    color VARCHAR(50) NOT NULL,
    hardness INTEGER CHECK (hardness > 0),
    rarity TEXT,
    can_be_water_cleansed BOOLEAN DEFAULT false,
    healing_effects TEXT,
    collected_on TIMESTAMPTZ,
    favorite BOOLEAN DEFAULT false
);