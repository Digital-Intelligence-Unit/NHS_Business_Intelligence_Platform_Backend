const createQuery = `-- Table: public.docobo_acknowledgements

-- DROP TABLE IF EXISTS public.docobo_acknowledgements;

CREATE TABLE IF NOT EXISTS public.docobo_acknowledgements
(
    "importFileName" text COLLATE pg_catalog."default",
    nhs_number text COLLATE pg_catalog."default",
    "isEnrolled" boolean,
    error text COLLATE pg_catalog."default",
    "rowNumber" bigint,
    uid bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    CONSTRAINT docobo_acknowledgements_pkey PRIMARY KEY (uid)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.docobo_acknowledgements
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
