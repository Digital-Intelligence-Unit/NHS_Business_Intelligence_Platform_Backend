let createQuery = `-- Table: public.mosaichousehold

-- DROP TABLE IF EXISTS public.mosaichousehold;

CREATE TABLE IF NOT EXISTS public.mosaichousehold
(
    mosaictype character(2) COLLATE pg_catalog."default",
    mosaicgroup character(1) COLLATE pg_catalog."default",
    fyldecoast integer,
    westlancs integer,
    geom geometry
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.mosaichousehold
    OWNER to postgres;`;

module.exports.createQuery = createQuery;