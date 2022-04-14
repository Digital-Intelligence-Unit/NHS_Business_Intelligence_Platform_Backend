let createQuery = `-- Table: public.lscft_admissions

-- DROP TABLE IF EXISTS public.lscft_admissions;

CREATE TABLE IF NOT EXISTS public.lscft_admissions
(
    id text COLLATE pg_catalog."default",
    network text COLLATE pg_catalog."default",
    service_name text COLLATE pg_catalog."default",
    team text COLLATE pg_catalog."default",
    new_or_followup text COLLATE pg_catalog."default",
    patient_contact_group text COLLATE pg_catalog."default",
    patient_contact_type text COLLATE pg_catalog."default",
    nhs_number text COLLATE pg_catalog."default",
    age double precision,
    gender text COLLATE pg_catalog."default",
    consultation_medium text COLLATE pg_catalog."default",
    attendance_status text COLLATE pg_catalog."default",
    attendance_status_group text COLLATE pg_catalog."default",
    contact_datetime text COLLATE pg_catalog."default",
    month_name text COLLATE pg_catalog."default",
    arrived_datetime text COLLATE pg_catalog."default",
    contact_end_datetime text COLLATE pg_catalog."default",
    duration_of_contact double precision,
    gp_practice text COLLATE pg_catalog."default",
    gp_practice_code text COLLATE pg_catalog."default",
    team_member text COLLATE pg_catalog."default",
    job_title text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.lscft_admissions
    OWNER to postgres;`;

module.exports.createQuery = createQuery;