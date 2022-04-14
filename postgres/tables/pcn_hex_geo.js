let createQuery = `-- Table: public.pcn_hex_geo

-- DROP TABLE IF EXISTS public.pcn_hex_geo;

CREATE TABLE IF NOT EXISTS public.pcn_hex_geo
(
    id integer,
    pcn text COLLATE pg_catalog."default",
    geom geometry
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.pcn_hex_geo
    OWNER to postgres;`;

module.exports.createQuery = createQuery;