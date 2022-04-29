const createQuery = `-- Table: public.docobo_patients

-- DROP TABLE IF EXISTS public.docobo_patients;

CREATE TABLE IF NOT EXISTS public.docobo_patients
(
    orgcode text COLLATE pg_catalog."default",
    "nhsNumber" text COLLATE pg_catalog."default",
    "patientId" text COLLATE pg_catalog."default",
    "dischargeDestination" text COLLATE pg_catalog."default",
    "offBoardingDate" timestamp with time zone,
    "onBoardingDate" timestamp with time zone,
    "referralSource" text COLLATE pg_catalog."default",
    "selfDischarge" text COLLATE pg_catalog."default",
    "serviceType" text COLLATE pg_catalog."default",
    "patientDied" boolean
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.docobo_patients
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
