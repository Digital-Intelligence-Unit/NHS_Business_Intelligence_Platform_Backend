const createQuery = `-- Table: public.icps

-- DROP TABLE IF EXISTS public.icps;

CREATE TABLE IF NOT EXISTS public.icps
(
    icp character varying(255) COLLATE pg_catalog."default",
    geom geometry
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.icps
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
