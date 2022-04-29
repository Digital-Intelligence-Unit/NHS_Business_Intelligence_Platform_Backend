const createQuery = `-- Table: public.docobo_osats

-- DROP TABLE IF EXISTS public.docobo_osats;

CREATE TABLE IF NOT EXISTS public.docobo_osats
(
    "patientId" text COLLATE pg_catalog."default",
    "measurmentDateTime" timestamp with time zone,
    "o2Sat" integer
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.docobo_osats
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
