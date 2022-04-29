const createQuery = `-- Table: public.district_flags

-- DROP TABLE IF EXISTS public.district_flags;

CREATE TABLE IF NOT EXISTS public.district_flags
(
    nhs_number text COLLATE pg_catalog."default",
    reason text COLLATE pg_catalog."default",
    flag text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.district_flags
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
