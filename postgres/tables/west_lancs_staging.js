const createQuery = `-- Table: public.west_lancs_staging

-- DROP TABLE IF EXISTS public.west_lancs_staging;

CREATE TABLE IF NOT EXISTS public.west_lancs_staging
(
    "row.names" text COLLATE pg_catalog."default",
    local_authority_name text COLLATE pg_catalog."default",
    gpp_code text COLLATE pg_catalog."default",
    practice text COLLATE pg_catalog."default",
    nhs_number double precision,
    age double precision,
    age_category text COLLATE pg_catalog."default",
    sex text COLLATE pg_catalog."default",
    date_of_birth text COLLATE pg_catalog."default",
    date_of_death text COLLATE pg_catalog."default",
    title text COLLATE pg_catalog."default",
    forename text COLLATE pg_catalog."default",
    surname text COLLATE pg_catalog."default",
    address_line_1 text COLLATE pg_catalog."default",
    address_line_2 text COLLATE pg_catalog."default",
    address_line_3 text COLLATE pg_catalog."default",
    address_line_4 text COLLATE pg_catalog."default",
    address_line_5 text COLLATE pg_catalog."default",
    postcode text COLLATE pg_catalog."default",
    ward_name text COLLATE pg_catalog."default",
    landline text COLLATE pg_catalog."default",
    mobile text COLLATE pg_catalog."default",
    other_shielded_category double precision
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.west_lancs_staging
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
