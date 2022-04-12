let createQuery = `-- Table: public.mosaic_grand_index

-- DROP TABLE IF EXISTS public.mosaic_grand_index;

CREATE TABLE IF NOT EXISTS public.mosaic_grand_index
(
    "row.names" text COLLATE pg_catalog."default",
    "VarId" integer,
    "Category" text COLLATE pg_catalog."default",
    "Topic" text COLLATE pg_catalog."default",
    "VariableName" text COLLATE pg_catalog."default",
    "Source" text COLLATE pg_catalog."default",
    "VariableGroup" text COLLATE pg_catalog."default",
    value double precision
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.mosaic_grand_index
    OWNER to postgres;`;

module.exports.createQuery = createQuery;