-- CREATE TABLE crystals (
--     id SERIAL PRIMARY KEY,
--     name TEXT NOT NULL,
--     color VARCHAR(50) NOT NULL,
--     hardness INTEGER,
--     rarity TEXT,
--     can_be_water_cleansed BOOLEAN,
--     healing_effects TEXT,
--     collected_on DATE,
--     favorite BOOLEAN
-- )

\c crystals_dev;

INSERT INTO crystals (name, color, hardness, rarity, can_be_water_cleansed, healing_effects, collected_on, favorite) VALUES
('Amethyst', 'Pale lilac to dark vivid purple', 7, 'Easily obtained', true, 'Calms nervous system and the brain, easing headaches.', '2023-11-11', true),
('Prehnite', 'Pale green, yellow, white, colorless', 6, 'Easily obtained', true, 'Release emotional pain from the past.', '2023-05-02', false),
('Red Jasper', 'Red, yellow, brown', 6, 'Easilty obtained', true, 'Gently energizing and suportive. Grounding and protecting the body strengthening the energy field.', '2023-04-11', true),
('Selenite', 'Clear', 2, 'Easilty obtained', false, 'A conductor of energy, and its cleansing effects can be strongly felt on the system.', '2023-06-27', true);