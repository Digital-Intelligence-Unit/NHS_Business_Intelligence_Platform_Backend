let createQuery = `-- Table: public.pbi_geographies

-- DROP TABLE IF EXISTS public.pbi_geographies;

CREATE TABLE IF NOT EXISTS public.pbi_geographies
(
    geo_id character varying(255) COLLATE pg_catalog."default",
    geo_name character varying(255) COLLATE pg_catalog."default",
    geo_level character varying(255) COLLATE pg_catalog."default",
    geo_year character varying(255) COLLATE pg_catalog."default",
    geom geometry
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.pbi_geographies
    OWNER to postgres;`;

module.exports.createQuery = createQuery;