const createQuery = `-- Table: public.nsss_master

-- DROP TABLE IF EXISTS public.nsss_master;

CREATE TABLE IF NOT EXISTS public.nsss_master
(
    nhs_number double precision,
    "ID" text COLLATE pg_catalog."default",
    first_name text COLLATE pg_catalog."default",
    middle_name text COLLATE pg_catalog."default",
    last_name text COLLATE pg_catalog."default",
    address_line1 text COLLATE pg_catalog."default",
    address_line2 text COLLATE pg_catalog."default",
    address_town_city text COLLATE pg_catalog."default",
    address_postcode text COLLATE pg_catalog."default",
    address_uprn double precision,
    contact_number_calls text COLLATE pg_catalog."default",
    contact_number_texts text COLLATE pg_catalog."default",
    contact_email text COLLATE pg_catalog."default",
    uid_submission text COLLATE pg_catalog."default",
    are_you_applying_on_behalf_of_someone_else text COLLATE pg_catalog."default",
    have_you_received_an_nhs_letter text COLLATE pg_catalog."default",
    do_you_want_supermarket_deliveries text COLLATE pg_catalog."default",
    do_you_need_someone_to_contact_you_about_local_support text COLLATE pg_catalog."default",
    do_you_have_one_of_the_listed_medical_conditions text COLLATE pg_catalog."default",
    do_you_have_someone_to_go_shopping_for_you text COLLATE pg_catalog."default",
    ladcode text COLLATE pg_catalog."default",
    active_status text COLLATE pg_catalog."default",
    spl_category text COLLATE pg_catalog."default",
    spl_address_line1 text COLLATE pg_catalog."default",
    spl_address_line2 text COLLATE pg_catalog."default",
    spl_address_line3 text COLLATE pg_catalog."default",
    spl_address_line4 text COLLATE pg_catalog."default",
    spl_address_line5 text COLLATE pg_catalog."default",
    spl_address_postcode text COLLATE pg_catalog."default",
    spl_address_uprn double precision,
    submission_datetime text COLLATE pg_catalog."default",
    submission_date date,
    date_of_birth date,
    nhs_letter_flag boolean,
    applying_on_behalf_flag boolean,
    supermarket_deliveries_flag boolean,
    someone_else_shopping_flag boolean,
    listed_medical_condition_flag boolean,
    contact_requested_flag boolean,
    active_status_flag boolean,
    loaded_date date,
    new boolean,
    updated boolean
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.nsss_master
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
