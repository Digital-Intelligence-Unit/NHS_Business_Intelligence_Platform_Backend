const createQuery = `-- Table: public.postcode_to_utla_names

-- DROP TABLE IF EXISTS public.postcode_to_utla_names;

CREATE TABLE IF NOT EXISTS public.postcode_to_utla_names
(
    postcode text COLLATE pg_catalog."default",
    lsoa text COLLATE pg_catalog."default",
    lsoa_name text COLLATE pg_catalog."default",
    msoa text COLLATE pg_catalog."default",
    msoa_name text COLLATE pg_catalog."default",
    la text COLLATE pg_catalog."default",
    utla text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.postcode_to_utla_names
    OWNER to postgres;

REVOKE ALL ON TABLE public.postcode_to_utla_names FROM vishnu;

GRANT ALL ON TABLE public.postcode_to_utla_names TO postgres;

GRANT SELECT ON TABLE public.postcode_to_utla_names TO vishnu;`;

module.exports.createQuery = createQuery;
