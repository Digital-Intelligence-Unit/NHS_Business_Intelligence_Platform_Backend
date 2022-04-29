const createQuery = `-- Table: public.modelled_need

-- DROP TABLE IF EXISTS public.modelled_need;

CREATE TABLE IF NOT EXISTS public.modelled_need
(
    "row.names" text COLLATE pg_catalog."default",
    "Ltc_asth" integer,
    "Ltc_cad" integer,
    "Ltc_chf" integer,
    "Ltc_cncr" integer,
    "Ltc_copd" integer,
    "Ltc_depr" integer,
    "Ltc_diab" integer,
    "Ltc_hten" integer,
    ltc_af integer,
    ltc_ckd integer,
    ltc_dementia integer,
    ltc_epilepsy integer,
    ltc_hypothyroid integer,
    ltc_mentalhealth integer,
    ltc_learning_dis integer,
    ltc_osteoporosis integer,
    ltc_pad integer,
    ltc_ra integer,
    ltc_stroketia integer,
    total_cost double precision,
    age integer,
    sex text COLLATE pg_catalog."default",
    deprivation_decile integer,
    ae_attendances integer,
    op_appointments integer,
    ip_elective integer,
    gpp_code text COLLATE pg_catalog."default",
    ward_name text COLLATE pg_catalog."default",
    area text COLLATE pg_catalog."default",
    locality text COLLATE pg_catalog."default",
    ccg_name text COLLATE pg_catalog."default",
    avg_appointment_difference integer,
    smoking integer,
    substance_misuse integer,
    psychotic_disorder integer,
    mosaic_label text COLLATE pg_catalog."default",
    frailty_text text COLLATE pg_catalog."default",
    housebound_text text COLLATE pg_catalog."default",
    care_status text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.modelled_need
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
