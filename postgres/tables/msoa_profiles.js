let createQuery = `-- Table: public.msoa_profiles

-- DROP TABLE IF EXISTS public.msoa_profiles;

CREATE TABLE IF NOT EXISTS public.msoa_profiles
(
    "row.names" text COLLATE pg_catalog."default",
    msoa text COLLATE pg_catalog."default",
    la text COLLATE pg_catalog."default",
    msoa_name text COLLATE pg_catalog."default",
    msoa_nice_name text COLLATE pg_catalog."default",
    top_acorn text COLLATE pg_catalog."default",
    top_acorn_perct double precision,
    second_acorn text COLLATE pg_catalog."default",
    second_acorn_perct double precision,
    third_acorn text COLLATE pg_catalog."default",
    third_acorn_perct double precision,
    remaining_acorn_perct double precision,
    imd_decile double precision,
    imd_rank double precision,
    population_2018 double precision,
    age_0_17_perct double precision,
    age_18_44_perct double precision,
    age_45_64_perct double precision,
    age_65_plus_perct double precision,
    age_85_plus_perct double precision,
    median_age double precision,
    white_perct double precision,
    mixed_perct double precision,
    asian_perct double precision,
    black_perct double precision,
    other_perct double precision,
    all_16_plus_household_english_first_language_perct double precision,
    no_in_household_english_first_language_perct double precision,
    activities_limited_a_lot_perct double precision,
    activities_limited_a_little_perct double precision,
    bad_health_perct double precision,
    very_bad_health_perct double precision,
    unpaid_care_provider_20_49_hours_per_week_perct double precision,
    unpaid_care_provider_50_hours_plus_per_week_perct double precision,
    no_qualifications_perct double precision,
    level_4_qualifications_perct double precision,
    number_of_households double precision,
    one_person_household_perct double precision,
    one_person_household_65_plus_perct double precision,
    owned_houses_perct double precision,
    social_rented_houses_perct double precision,
    private_rented_houses_perct double precision,
    occupancy_rating_rooms_neg_1_perct double precision,
    occupancy_rating_rooms_below_neg_1_perct double precision,
    occupancy_rating_bedrooms_neg_1_perct double precision,
    occupancy_rating_bedrooms_below_neg_1_perct double precision,
    households_in_poverty_after_housing_costs_perct double precision,
    avg_household_income_pounds double precision,
    claimants_16_64_perct double precision
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.msoa_profiles
    OWNER to postgres;`;

module.exports.createQuery = createQuery;