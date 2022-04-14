let createQuery = `-- Table: public.imd_2019

-- DROP TABLE IF EXISTS public.imd_2019;

CREATE TABLE IF NOT EXISTS public.imd_2019
(
    lsoa_code text COLLATE pg_catalog."default",
    lsoa_name text COLLATE pg_catalog."default",
    la_code text COLLATE pg_catalog."default",
    la_name text COLLATE pg_catalog."default",
    imd_rank double precision,
    imd_decile double precision
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.imd_2019
    OWNER to postgres;`;

module.exports.createQuery = createQuery;