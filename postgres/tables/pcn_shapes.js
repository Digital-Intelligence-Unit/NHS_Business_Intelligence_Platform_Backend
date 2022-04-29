const createQuery = `-- Table: public.pcn_shapes

-- DROP TABLE IF EXISTS public.pcn_shapes;

CREATE TABLE IF NOT EXISTS public.pcn_shapes
(
    pcn text COLLATE pg_catalog."default",
    geometry geometry
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.pcn_shapes
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
