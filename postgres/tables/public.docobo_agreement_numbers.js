const createQuery = `-- Table: public.public.docobo_agreement_numbers

-- DROP TABLE IF EXISTS public."public.docobo_agreement_numbers";

CREATE TABLE IF NOT EXISTS public."public.docobo_agreement_numbers"
(
    top_level_organisation text COLLATE pg_catalog."default",
    sub_organisation text COLLATE pg_catalog."default",
    live_system_agreement_number text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."public.docobo_agreement_numbers"
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
