const createQuery = `-- Table: public.covid_populations_backup

-- DROP TABLE IF EXISTS public.covid_populations_backup;

CREATE TABLE IF NOT EXISTS public.covid_populations_backup
(
    ccg character(3) COLLATE pg_catalog."default",
    age integer,
    sex character(1) COLLATE pg_catalog."default",
    rsk integer,
    w character(9) COLLATE pg_catalog."default",
    m character(3) COLLATE pg_catalog."default",
    d integer,
    l character varying(255) COLLATE pg_catalog."default",
    gp character(6) COLLATE pg_catalog."default",
    cr character varying(64) COLLATE pg_catalog."default",
    cv character varying(64) COLLATE pg_catalog."default",
    lcnt character varying(6) COLLATE pg_catalog."default",
    fcnt character varying(6) COLLATE pg_catalog."default",
    ltcs jsonb,
    flags jsonb
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.covid_populations_backup
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
