let createQuery = `-- Table: public.virtualward_manuallogging

-- DROP TABLE IF EXISTS public.virtualward_manuallogging;

CREATE TABLE IF NOT EXISTS public.virtualward_manuallogging
(
    uid bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    nhs_number text COLLATE pg_catalog."default" NOT NULL,
    contact text COLLATE pg_catalog."default" NOT NULL,
    username text COLLATE pg_catalog."default" NOT NULL,
    organisation text COLLATE pg_catalog."default" NOT NULL,
    sendtime timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    messageid text COLLATE pg_catalog."default",
    CONSTRAINT virtualward_manuallogging_pkey PRIMARY KEY (uid)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.virtualward_manuallogging
    OWNER to postgres;`;

module.exports.createQuery = createQuery;