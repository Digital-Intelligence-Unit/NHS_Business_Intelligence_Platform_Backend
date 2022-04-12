let createQuery = `-- Table: public.isochrone_outbreak

-- DROP TABLE IF EXISTS public.isochrone_outbreak;

CREATE TABLE IF NOT EXISTS public.isochrone_outbreak
(
    id character varying(255) COLLATE pg_catalog."default",
    "time" integer,
    lat real,
    lng real,
    tme integer,
    optim_var real,
    p_value real,
    geom geometry
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.isochrone_outbreak
    OWNER to postgres;`;

module.exports.createQuery = createQuery;