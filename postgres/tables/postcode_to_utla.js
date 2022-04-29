const createQuery = `-- Table: public.postcode_to_utla

-- DROP TABLE IF EXISTS public.postcode_to_utla;

CREATE TABLE IF NOT EXISTS public.postcode_to_utla
(
    "row.names" text COLLATE pg_catalog."default",
    postcode text COLLATE pg_catalog."default",
    lsoa text COLLATE pg_catalog."default",
    msoa text COLLATE pg_catalog."default",
    la text COLLATE pg_catalog."default",
    utla text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.postcode_to_utla
    OWNER to postgres;

REVOKE ALL ON TABLE public.postcode_to_utla FROM vishnu;

GRANT ALL ON TABLE public.postcode_to_utla TO postgres;

GRANT SELECT ON TABLE public.postcode_to_utla TO vishnu;`;

module.exports.createQuery = createQuery;
