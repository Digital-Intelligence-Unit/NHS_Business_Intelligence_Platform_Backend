const createQuery = `-- Table: public.mosaicpcn

-- DROP TABLE IF EXISTS public.mosaicpcn;

CREATE TABLE IF NOT EXISTS public.mosaicpcn
(
    "VarId" integer,
    "Category" text COLLATE pg_catalog."default",
    "Topic" text COLLATE pg_catalog."default",
    "VariableName" text COLLATE pg_catalog."default",
    "Source" text COLLATE pg_catalog."default",
    pcn text COLLATE pg_catalog."default",
    pcn_value double precision,
    lat double precision,
    "long" double precision
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.mosaicpcn
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
