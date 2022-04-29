const createQuery = `-- Table: public.mosaicpostcode

-- DROP TABLE IF EXISTS public.mosaicpostcode;

CREATE TABLE IF NOT EXISTS public.mosaicpostcode
(
    postcode character varying(10) COLLATE pg_catalog."default",
    mostype character varying(10) COLLATE pg_catalog."default",
    pop integer,
    fyldecoast integer,
    westlancs integer,
    geom geometry
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.mosaicpostcode
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
