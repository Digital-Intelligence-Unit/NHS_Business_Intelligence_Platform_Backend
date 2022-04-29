const createQuery = `-- Table: public.lsoa_shapes_backup

-- DROP TABLE IF EXISTS public.lsoa_shapes_backup;

CREATE TABLE IF NOT EXISTS public.lsoa_shapes_backup
(
    lsoa character varying(255) COLLATE pg_catalog."default",
    plot_var real,
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

ALTER TABLE IF EXISTS public.lsoa_shapes_backup
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
