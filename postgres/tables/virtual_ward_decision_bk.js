const createQuery = `-- Table: public.virtual_ward_decision_bk

-- DROP TABLE IF EXISTS public.virtual_ward_decision_bk;

CREATE TABLE IF NOT EXISTS public.virtual_ward_decision_bk
(
    id double precision,
    nhs_number text COLLATE pg_catalog."default",
    age_in_years double precision,
    ethnicity text COLLATE pg_catalog."default",
    specimen_date text COLLATE pg_catalog."default",
    age_band text COLLATE pg_catalog."default",
    forename text COLLATE pg_catalog."default",
    surname text COLLATE pg_catalog."default",
    patient_sex text COLLATE pg_catalog."default",
    address_line_1 text COLLATE pg_catalog."default",
    postcode text COLLATE pg_catalog."default",
    date_of_birth text COLLATE pg_catalog."default",
    phone_number text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    title text COLLATE pg_catalog."default",
    gpp_code text COLLATE pg_catalog."default",
    ccg_code text COLLATE pg_catalog."default",
    asthma boolean,
    copd boolean,
    late_copd boolean,
    chd boolean,
    heart_failure boolean,
    atrial_fibrillation boolean,
    pad boolean,
    stroke_tia boolean,
    cancer boolean,
    chemo_radiotherapy boolean,
    haematological_cancers boolean,
    depression boolean,
    dementia boolean,
    mental_health boolean,
    psychotic_disorder_flag boolean,
    learning_disabilities boolean,
    diabetes boolean,
    hypothyroid boolean,
    ckd boolean,
    epilepsy boolean,
    osteoporosis boolean,
    rheumatoid_arthritis boolean,
    smoker boolean,
    substance_misuse boolean,
    dispensing_flag boolean,
    pregnant_with_congenital_heart_defect boolean,
    rare_diseases boolean,
    transplant boolean,
    palliative_care_flag boolean,
    spl boolean,
    covid_vuln text COLLATE pg_catalog."default",
    rs_frailty_index text COLLATE pg_catalog."default",
    risk_score double precision,
    recommendation text COLLATE pg_catalog."default",
    home_type text COLLATE pg_catalog."default",
    docobo_ref boolean,
    updated_date date,
    loaded_date text COLLATE pg_catalog."default",
    status text COLLATE pg_catalog."default",
    notes text COLLATE pg_catalog."default",
    newcontact text COLLATE pg_catalog."default",
    nonreferral_reason text COLLATE pg_catalog."default",
    docobo_error text COLLATE pg_catalog."default",
    care_home_role text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.virtual_ward_decision_bk
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
