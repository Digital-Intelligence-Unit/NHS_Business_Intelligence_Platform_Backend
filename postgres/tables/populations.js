const createQuery = `-- Table: public.populations

-- DROP TABLE IF EXISTS public.populations;

CREATE TABLE IF NOT EXISTS public.populations
(
    ccg character(3) COLLATE pg_catalog."default" NOT NULL,
    age integer,
    sex character(1) COLLATE pg_catalog."default" NOT NULL,
    rsk integer NOT NULL,
    w character(9) COLLATE pg_catalog."default" NOT NULL,
    t character varying(10) COLLATE pg_catalog."default" NOT NULL,
    m character(3) COLLATE pg_catalog."default" NOT NULL,
    d integer NOT NULL,
    l character varying(255) COLLATE pg_catalog."default" NOT NULL,
    gp character(6) COLLATE pg_catalog."default" NOT NULL,
    u integer NOT NULL,
    ach character varying(2) COLLATE pg_catalog."default",
    acw character varying(2) COLLATE pg_catalog."default",
    cst integer NOT NULL,
    lcnt character varying(2) COLLATE pg_catalog."default" NOT NULL,
    ltcs jsonb
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.populations
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
