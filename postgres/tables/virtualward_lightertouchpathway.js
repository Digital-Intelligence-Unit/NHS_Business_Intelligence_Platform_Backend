const createQuery = `-- Table: public.virtualward_lightertouchpathway

-- DROP TABLE IF EXISTS public.virtualward_lightertouchpathway;

CREATE TABLE IF NOT EXISTS public.virtualward_lightertouchpathway
(
    uid bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    nhs_number text COLLATE pg_catalog."default" NOT NULL,
    demographics text COLLATE pg_catalog."default",
    contact text COLLATE pg_catalog."default",
    specimen_date timestamp without time zone NOT NULL,
    script_date timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    messagesent boolean NOT NULL DEFAULT false,
    messageid text COLLATE pg_catalog."default",
    status text COLLATE pg_catalog."default",
    ccg_code text COLLATE pg_catalog."default",
    gpp_code text COLLATE pg_catalog."default",
    CONSTRAINT virtualward_lightertouchpathway_pkey PRIMARY KEY (uid)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.virtualward_lightertouchpathway
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
