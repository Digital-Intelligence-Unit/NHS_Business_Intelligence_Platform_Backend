const createQuery = `-- Table: public.virtualward_servicecountlog

-- DROP TABLE IF EXISTS public.virtualward_servicecountlog;

CREATE TABLE IF NOT EXISTS public.virtualward_servicecountlog
(
    uid bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    msgcount smallint NOT NULL,
    organisation text COLLATE pg_catalog."default" NOT NULL,
    servicename text COLLATE pg_catalog."default" NOT NULL,
    type text COLLATE pg_catalog."default" NOT NULL,
    period text COLLATE pg_catalog."default" NOT NULL,
    messageid text COLLATE pg_catalog."default",
    CONSTRAINT virtualward_servicecountlog_pkey PRIMARY KEY (uid)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.virtualward_servicecountlog
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
