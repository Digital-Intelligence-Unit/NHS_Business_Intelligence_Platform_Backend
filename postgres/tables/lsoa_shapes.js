const createQuery = `-- Table: public.lsoa_shapes

-- DROP TABLE IF EXISTS public.lsoa_shapes;

CREATE TABLE IF NOT EXISTS public.lsoa_shapes
(
    lsoa character varying(255) COLLATE pg_catalog."default",
    lsoa_name character varying(255) COLLATE pg_catalog."default",
    lat real,
    "long" real,
    population integer,
    geometry geometry
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.lsoa_shapes
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
