const createQuery = `-- Table: public.docobo_link_refs

-- DROP TABLE IF EXISTS public.docobo_link_refs;

CREATE TABLE IF NOT EXISTS public.docobo_link_refs
(
    id bigint,
    nhs character varying(10) COLLATE pg_catalog."default",
    filename character varying(255) COLLATE pg_catalog."default",
    row_number bigint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.docobo_link_refs
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
