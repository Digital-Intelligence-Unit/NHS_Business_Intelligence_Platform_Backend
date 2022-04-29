const createQuery = `-- Table: public.district_master

-- DROP TABLE IF EXISTS public.district_master;

CREATE TABLE IF NOT EXISTS public.district_master
(
    local_authority_name text COLLATE pg_catalog."default",
    gpp_code text COLLATE pg_catalog."default",
    practice text COLLATE pg_catalog."default",
    nhs_number text COLLATE pg_catalog."default",
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
    other_shielded_category double precision,
    district text COLLATE pg_catalog."default",
    etl_run_date date,
    other_forenames boolean,
    assisted_collection boolean,
    home_care_link boolean,
    single_occupancy boolean,
    number_of_occupants boolean,
    disabled_facilities_grant boolean,
    council_tax boolean,
    "neighbourhood_linked_to_PCN" boolean,
    universal_credit boolean,
    housing_benefit boolean,
    business_grant boolean,
    result boolean,
    reason boolean,
    contact_date boolean
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.district_master
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
