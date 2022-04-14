let createQuery = `-- Table: public.docobo_osats_landing

-- DROP TABLE IF EXISTS public.docobo_osats_landing;

CREATE TABLE IF NOT EXISTS public.docobo_osats_landing
(
    "patientId" text COLLATE pg_catalog."default" NOT NULL,
    "measurmentDateTime" character varying(255) COLLATE pg_catalog."default",
    "o2Sat" character varying(255) COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.docobo_osats_landing
    OWNER to postgres;`;

module.exports.createQuery = createQuery;