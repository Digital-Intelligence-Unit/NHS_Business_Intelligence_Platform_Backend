const createQuery = `-- Table: public.lancs_schools

-- DROP TABLE IF EXISTS public.lancs_schools;

CREATE TABLE IF NOT EXISTS public.lancs_schools
(
    postcode text COLLATE pg_catalog."default",
    type text COLLATE pg_catalog."default",
    name text COLLATE pg_catalog."default",
    type_code text COLLATE pg_catalog."default",
    la text COLLATE pg_catalog."default",
    lat double precision,
    "long" double precision
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.lancs_schools
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
