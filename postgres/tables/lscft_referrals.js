const createQuery = `-- Table: public.lscft_referrals

-- DROP TABLE IF EXISTS public.lscft_referrals;

CREATE TABLE IF NOT EXISTS public.lscft_referrals
(
    id text COLLATE pg_catalog."default",
    referral_received_month text COLLATE pg_catalog."default",
    referral_source text COLLATE pg_catalog."default",
    initial_referral_referred_by_staff_team text COLLATE pg_catalog."default",
    referral_received_datetime date,
    network text COLLATE pg_catalog."default",
    cqc_core_service text COLLATE pg_catalog."default",
    team text COLLATE pg_catalog."default",
    referred_to_staff_team_id text COLLATE pg_catalog."default",
    referral_type text COLLATE pg_catalog."default",
    referral_status text COLLATE pg_catalog."default",
    referral_reason text COLLATE pg_catalog."default",
    referral_priority text COLLATE pg_catalog."default",
    nhs_number text COLLATE pg_catalog."default",
    age_at_referral double precision,
    age_group_at_referral text COLLATE pg_catalog."default",
    ethnicity text COLLATE pg_catalog."default",
    gender text COLLATE pg_catalog."default",
    gp_practice_code text COLLATE pg_catalog."default",
    gp_practice_name text COLLATE pg_catalog."default",
    ccg text COLLATE pg_catalog."default",
    count_of_previous_referrals_to_same_service double precision,
    previous_referrals_most_recent_received_date date,
    previous_referrals_most_recent_closed_date date
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.lscft_referrals
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
