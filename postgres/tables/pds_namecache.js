let createQuery = `-- Table: public.pds_namecache

-- DROP TABLE IF EXISTS public.pds_namecache;

CREATE TABLE IF NOT EXISTS public.pds_namecache
(
    nhsnumber character varying(10) COLLATE pg_catalog."default" NOT NULL,
    occupation character varying(255) COLLATE pg_catalog."default" NOT NULL,
    firstname character varying(255) COLLATE pg_catalog."default" NOT NULL,
    familyname character varying(255) COLLATE pg_catalog."default" NOT NULL,
    date_of_birth date NOT NULL,
    CONSTRAINT pds_namecache_pkey PRIMARY KEY (nhsnumber)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.pds_namecache
    OWNER to postgres;`;

module.exports.createQuery = createQuery;