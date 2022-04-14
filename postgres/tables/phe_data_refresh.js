let createQuery = `-- Table: public.phe_data_refresh

-- DROP TABLE IF EXISTS public.phe_data_refresh;

CREATE TABLE IF NOT EXISTS public.phe_data_refresh
(
    contact_tracing_refresh_dt timestamp with time zone,
    contact_tracing_refreshed boolean,
    positive_cases_refresh_dt timestamp with time zone,
    positive_cases_refreshed boolean
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.phe_data_refresh
    OWNER to postgres;`;

module.exports.createQuery = createQuery;