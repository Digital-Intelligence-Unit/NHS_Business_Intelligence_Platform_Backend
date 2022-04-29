const createQuery = `-- Table: public.covid19_negative_void

-- DROP TABLE IF EXISTS public.covid19_negative_void;

CREATE TABLE IF NOT EXISTS public.covid19_negative_void
(
    id text COLLATE pg_catalog."default",
    lft_flag text COLLATE pg_catalog."default",
    patient_forename text COLLATE pg_catalog."default",
    patient_surname text COLLATE pg_catalog."default",
    patient_nhs_number text COLLATE pg_catalog."default",
    postcode text COLLATE pg_catalog."default",
    specimen_date date
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.covid19_negative_void
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
