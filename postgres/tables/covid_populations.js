const createQuery = `-- Table: public.covid_populations

-- DROP TABLE IF EXISTS public.covid_populations;

CREATE TABLE IF NOT EXISTS public.covid_populations
(
    ccg character(3) COLLATE pg_catalog."default" NOT NULL,
    age integer,
    sex character(1) COLLATE pg_catalog."default" NOT NULL,
    rsk integer NOT NULL,
    w character(9) COLLATE pg_catalog."default" NOT NULL,
    m character(3) COLLATE pg_catalog."default" NOT NULL,
    d integer,
    l character varying(255) COLLATE pg_catalog."default" NOT NULL,
    gp character(6) COLLATE pg_catalog."default" NOT NULL,
    cr character varying(64) COLLATE pg_catalog."default" NOT NULL,
    cv character varying(64) COLLATE pg_catalog."default" NOT NULL,
    lcnt character varying(6) COLLATE pg_catalog."default" NOT NULL,
    fcnt character varying(6) COLLATE pg_catalog."default" NOT NULL,
    ltcs jsonb,
    flags jsonb
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.covid_populations
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
