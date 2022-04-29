const createQuery = `-- Table: public.covid19_cases_p1p2_bucket

-- DROP TABLE IF EXISTS public.covid19_cases_p1p2_bucket;

CREATE TABLE IF NOT EXISTS public.covid19_cases_p1p2_bucket
(
    postcodenowhite character varying(255) COLLATE pg_catalog."default",
    id bigint,
    nhs_number character varying(255) COLLATE pg_catalog."default",
    patient_sex character varying(16) COLLATE pg_catalog."default",
    age_in_years integer,
    patient_postcode character varying(32) COLLATE pg_catalog."default",
    specimen_date date,
    utla character varying(255) COLLATE pg_catalog."default",
    pillar character varying(255) COLLATE pg_catalog."default",
    ethnicity character varying(255) COLLATE pg_catalog."default",
    patient_occupation character varying(255) COLLATE pg_catalog."default",
    postcode character varying(32) COLLATE pg_catalog."default",
    x real,
    y real,
    ethnicity_orig character varying(255) COLLATE pg_catalog."default",
    age_band character varying(255) COLLATE pg_catalog."default",
    linked_to_care_home character varying(255) COLLATE pg_catalog."default",
    geom geometry,
    priority_group character varying COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.covid19_cases_p1p2_bucket
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
