const createQuery = `-- Table: public.performance_data

-- DROP TABLE IF EXISTS public.performance_data;

CREATE TABLE IF NOT EXISTS public.performance_data
(
    "row.names" integer,
    "MetricKey" integer,
    "ActualKey" integer,
    "PeriodEndingDate" date,
    "Area" character varying(16) COLLATE pg_catalog."default",
    "OrganisationCode" character varying(11) COLLATE pg_catalog."default",
    "OrganisationTypeKey" integer,
    "NationalOrganisationCode" character varying(8) COLLATE pg_catalog."default",
    "OrganisationPostcodeSector" character varying(6) COLLATE pg_catalog."default",
    "OrganisationONSCode" character varying(10) COLLATE pg_catalog."default",
    "OrganisationTypeDescription" character varying(16) COLLATE pg_catalog."default",
    "PublishedStateKey" integer,
    "IsManualActual" integer,
    "Numerator" double precision,
    "Denominator" double precision,
    "NumeratorYTD" double precision,
    "DenominatorYTD" double precision,
    "PlannedKey" integer,
    "PlannedValue" double precision,
    "PlannedValueYTD" double precision,
    "AmberThreshold" double precision,
    "AmberThresholdYTD" double precision,
    "DateLoaded" timestamp with time zone
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.performance_data
    OWNER to postgres;
-- Index: metkeydata_idx

-- DROP INDEX IF EXISTS public.metkeydata_idx;

CREATE INDEX IF NOT EXISTS metkeydata_idx
    ON public.performance_data USING btree
    ("MetricKey" ASC NULLS LAST)
    TABLESPACE pg_default;`;

module.exports.createQuery = createQuery;
