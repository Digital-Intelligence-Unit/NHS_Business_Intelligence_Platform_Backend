const createQuery = `-- Table: public.covid19_cases

-- DROP TABLE IF EXISTS public.covid19_cases;

CREATE TABLE IF NOT EXISTS public.covid19_cases
(
    date date,
    age integer,
    code character varying(255) COLLATE pg_catalog."default",
    gp character varying(255) COLLATE pg_catalog."default",
    x real,
    y real
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.covid19_cases
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
