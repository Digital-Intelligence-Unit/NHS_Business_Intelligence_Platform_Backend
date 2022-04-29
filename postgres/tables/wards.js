const createQuery = `-- Table: public.wards

-- DROP TABLE IF EXISTS public.wards;

CREATE TABLE IF NOT EXISTS public.wards
(
    objectid character varying(255) COLLATE pg_catalog."default",
    wd15cd character varying(255) COLLATE pg_catalog."default",
    wd15nm character varying(255) COLLATE pg_catalog."default",
    wd15nmw character varying(255) COLLATE pg_catalog."default",
    lad15cd character varying(255) COLLATE pg_catalog."default",
    lad15nm character varying(255) COLLATE pg_catalog."default",
    st_areasha character varying(255) COLLATE pg_catalog."default",
    st_lengths character varying(255) COLLATE pg_catalog."default",
    areaisect character varying(255) COLLATE pg_catalog."default",
    areaward integer,
    geom geometry
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.wards
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
