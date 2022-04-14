let createQuery = `-- Table: public.wards_2018

-- DROP TABLE IF EXISTS public.wards_2018;

CREATE TABLE IF NOT EXISTS public.wards_2018
(
    ward_code character varying(255) COLLATE pg_catalog."default",
    ward_name character varying(255) COLLATE pg_catalog."default",
    "long" real,
    lat real,
    population real,
    local_authority character varying(255) COLLATE pg_catalog."default",
    geometry geometry
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.wards_2018
    OWNER to postgres;`;

module.exports.createQuery = createQuery;