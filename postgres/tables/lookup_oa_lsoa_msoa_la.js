const createQuery = `-- Table: public.lookup_oa_lsoa_msoa_la

-- DROP TABLE IF EXISTS public.lookup_oa_lsoa_msoa_la;

CREATE TABLE IF NOT EXISTS public.lookup_oa_lsoa_msoa_la
(
    "OA11CD" text COLLATE pg_catalog."default",
    "OAC11CD" text COLLATE pg_catalog."default",
    "OAC11NM" text COLLATE pg_catalog."default",
    "LSOA11CD" text COLLATE pg_catalog."default",
    "LSOA11NM" text COLLATE pg_catalog."default",
    "SOAC11CD" text COLLATE pg_catalog."default",
    "SOAC11NM" text COLLATE pg_catalog."default",
    "MSOA11CD" text COLLATE pg_catalog."default",
    "MSOA11NM" text COLLATE pg_catalog."default",
    "LAD17CD" text COLLATE pg_catalog."default",
    "LAD17NM" text COLLATE pg_catalog."default",
    "LACCD" text COLLATE pg_catalog."default",
    "LACNM" text COLLATE pg_catalog."default",
    "RGN11CD" text COLLATE pg_catalog."default",
    "RGN11NM" text COLLATE pg_catalog."default",
    "CTRY11CD" text COLLATE pg_catalog."default",
    "CTRY11NM" text COLLATE pg_catalog."default",
    "FID" integer
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.lookup_oa_lsoa_msoa_la
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
