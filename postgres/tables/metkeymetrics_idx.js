const createQuery = `-- Table: public.performance_metrics

-- DROP TABLE IF EXISTS public.performance_metrics;

CREATE TABLE IF NOT EXISTS public.performance_metrics
(
    "row.names" integer,
    "MetricKey" integer,
    "MetricName" character varying(127) COLLATE pg_catalog."default",
    "MetricDescription" character varying(242) COLLATE pg_catalog."default",
    "DecimalPlaces" integer,
    "HigherIsBetter" integer,
    "ReportingFrequencyKey" integer,
    "FrequencyDescription" character varying(9) COLLATE pg_catalog."default",
    "CalculationTypeKey" integer,
    "CalculationTypeDescription" character varying(50) COLLATE pg_catalog."default",
    "TimeSeriesCalculationTypeKey" integer,
    "TimeSeriesCalculationTypeDescription" character varying(12) COLLATE pg_catalog."default",
    "DisplayFormatTypeKey" integer,
    "DisplayFormatTypeDescription" character varying(33) COLLATE pg_catalog."default",
    "RateMultiplierKey" integer,
    "RateMultiplierDescription" character varying(16) COLLATE pg_catalog."default",
    "RateMultiplierValue" integer,
    "MetricGroupKey" integer,
    "MetricGroupName" character varying(54) COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.performance_metrics
    OWNER to postgres;
-- Index: metkeymetrics_idx

-- DROP INDEX IF EXISTS public.metkeymetrics_idx;

CREATE UNIQUE INDEX IF NOT EXISTS metkeymetrics_idx
    ON public.performance_metrics USING btree
    ("MetricKey" ASC NULLS LAST)
    TABLESPACE pg_default;`;

module.exports.createQuery = createQuery;
